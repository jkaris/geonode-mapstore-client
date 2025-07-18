
/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import expect from 'expect';
import get from 'lodash/get';
import set from 'lodash/set';
import {
    resourceToLayerConfig,
    getResourcePermissions,
    availableResourceTypes,
    setAvailableResourceTypes,
    getGeoNodeMapLayers,
    toGeoNodeMapConfig,
    compareBackgroundLayers,
    toMapStoreMapConfig,
    parseStyleName,
    canCopyResource,
    processUploadResponse,
    parseUploadResponse,
    cleanUrl,
    getResourceTypesInfo,
    ResourceTypes,
    FEATURE_INFO_FORMAT,
    isDocumentExternalSource,
    getDownloadUrlInfo,
    getCataloguePath,
    getResourceWithLinkedResources,
    getResourceAdditionalProperties,
    getDimensions,
    canManageResourceSettings,
    canAccessPermissions,
    formatResourceLinkUrl
} from '../ResourceUtils';

describe('Test Resource Utils', () => {
    it('should keep the wms params from the url if available', () => {
        const newLayer = resourceToLayerConfig({
            alternate: 'geonode:layer_name',
            links: [{
                extension: 'html',
                link_type: 'OGC:WMS',
                name: 'OGC WMS Service',
                mime: 'text/html',
                url: 'http://localhost:8080/geoserver/wms?map=name&map_resolution=91'
            }],
            title: 'Layer title',
            perms: [],
            pk: 1
        });
        expect(newLayer.params).toEqual({ map: 'name', map_resolution: '91' });
    });
    it('test resourceToLayerConfig with layer settings of the dataset', () => {
        const newLayer = resourceToLayerConfig({
            alternate: 'geonode:layer_name',
            links: [{
                extension: 'html',
                link_type: 'OGC:WMS',
                name: 'OGC WMS Service',
                mime: 'text/html',
                url: 'http://localhost:8080/geoserver/wms?map=name&map_resolution=91'
            }],
            title: 'Layer title',
            perms: [],
            pk: 1,
            data: {opacity: 0.8}
        });
        expect(newLayer.opacity).toBe(0.8);
    });

    it('should parse arcgis dataset', () => {
        const newLayer = resourceToLayerConfig({
            alternate: 'remoteWorkspace:1',
            title: 'Layer title',
            perms: [],
            links: [{
                extension: 'html',
                link_type: 'image',
                mime: 'text/html',
                name: 'ArcGIS REST ImageServer',
                url: 'http://localhost:8080/MapServer'
            }],
            pk: 1,
            ptype: 'gxp_arcrestsource'
        });
        expect(newLayer.type).toBe('arcgis');
        expect(newLayer.name).toBe('1');
        expect(newLayer.url).toBe('http://localhost:8080/MapServer');
    });

    it('should getViewedResourcePermissions', () => {
        const data = [{
            name: "testType",
            allowed_perms: {
                compact: {
                    test1: [
                        {
                            name: 'none',
                            label: 'None'
                        },
                        {
                            name: 'view',
                            label: 'View'
                        }
                    ]
                }
            }
        }];
        const permissionOptions = getResourcePermissions(data[0].allowed_perms.compact);
        expect(permissionOptions).toEqual({
            test1: [
                { value: 'none', labelId: `gnviewer.nonePermission`, label: 'None' },
                { value: 'view', labelId: `gnviewer.viewPermission`, label: 'View' }
            ]
        });
    });

    it('should setAvailableResourceTypes', () => {
        setAvailableResourceTypes({ test: 'test data' });

        expect(availableResourceTypes).toEqual({ test: 'test data' });
    });
    it('should convert data blob to geonode maplayers', () => {
        const data = {
            map: {
                layers: [
                    { id: '01', type: 'osm', source: 'osm' },
                    { id: '02', type: 'vector', features: [] },
                    {
                        id: '03',
                        type: 'wms',
                        name: 'geonode:layer',
                        url: 'geoserver/wms',
                        style: 'geonode:style',
                        availableStyles: [{ name: 'custom:style', title: 'My Style', format: 'css', metadata: {} }],
                        extendedParams: {
                            mapLayer: {
                                pk: 10
                            }
                        },
                        opacity: 0.5,
                        visibility: false
                    }
                ]
            }
        };
        const mapLayers = getGeoNodeMapLayers(data);
        expect(mapLayers.length).toBe(1);
        expect(mapLayers[0]).toEqual({
            pk: 10,
            extra_params: {
                msId: '03'
            },
            current_style: 'geonode:style',
            name: 'geonode:layer',
            opacity: 0.5,
            visibility: false,
            order: 0
        });
    });
    it('should convert data blob to geonode map properties', () => {
        const data = {
            map: {
                projection: 'EPSG:3857',
                layers: [
                    { id: '01', type: 'osm', source: 'osm' },
                    { id: '02', type: 'vector', features: [] },
                    {
                        id: '03',
                        type: 'wms',
                        name: 'geonode:layer',
                        url: 'geoserver/wms',
                        style: 'geonode:style',
                        availableStyles: [{ name: 'custom:style', title: 'My Style' }],
                        extendedParams: {
                            mapLayer: {
                                pk: 10
                            }
                        }
                    }
                ]
            }
        };
        const mapState = {
            bbox: {
                bounds: { minx: -10, miny: -10, maxx: 10, maxy: 10 },
                crs: 'EPSG:4326'
            }
        };
        const geoNodeMapConfig = toGeoNodeMapConfig(data, mapState);
        expect(geoNodeMapConfig.maplayers.length).toBe(1);
    });
    it('should be able to compare background layers with different ids', () => {
        expect(compareBackgroundLayers({ type: 'osm', source: 'osm', id: '11' }, { type: 'osm', source: 'osm' })).toBe(true);
    });
    it('should transform a resource to a mapstore map config', () => {
        const resource = {
            maplayers: [
                {
                    pk: 10,
                    current_style: 'geonode:style01',
                    extra_params: {
                        msId: '03'
                    },
                    dataset: {
                        pk: 1
                    }
                }
            ],
            data: {
                map: {
                    layers: [
                        { id: '01', type: 'osm', source: 'osm', group: 'background', visibility: true },
                        { id: '02', type: 'vector', features: [] },
                        {
                            id: '03',
                            type: 'wms',
                            name: 'geonode:layer',
                            url: 'geoserver/wms',
                            style: 'geonode:style',
                            extendedParams: {
                                mapLayer: {
                                    pk: 10
                                }
                            }
                        }
                    ]
                }
            }
        };
        const baseConfig = {
            map: {
                layers: [
                    { type: 'osm', source: 'osm', group: 'background', visibility: true }
                ]
            }
        };
        const mapStoreMapConfig = toMapStoreMapConfig(resource, baseConfig);
        expect(mapStoreMapConfig).toEqual(
            {
                map: {
                    sources: {},
                    layers: [
                        { type: 'osm', source: 'osm', group: 'background', visibility: true },
                        { id: '02', type: 'vector', features: [] },
                        {
                            id: '03',
                            type: 'wms',
                            name: 'geonode:layer',
                            url: 'geoserver/wms',
                            style: 'geonode:style01',
                            extendedParams: {
                                mapLayer: {
                                    pk: 10,
                                    current_style: 'geonode:style01',
                                    extra_params: {
                                        msId: '03'
                                    },
                                    dataset: {
                                        pk: 1
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        );
    });
    it('should transform a resource to a mapstore map config, with featureInfo', () => {
        const resource = {
            maplayers: [
                {
                    pk: 10,
                    current_style: 'geonode:style01',
                    extra_params: {
                        msId: '03'
                    },
                    dataset: {
                        pk: 1
                    }
                }
            ],
            data: {
                map: {
                    layers: [
                        { id: '01', type: 'osm', source: 'osm', group: 'background', visibility: true },
                        { id: '02', type: 'vector', features: [] },
                        {
                            id: '03',
                            type: 'wms',
                            name: 'geonode:layer',
                            url: 'geoserver/wms',
                            style: 'geonode:style',
                            extendedParams: {
                                mapLayer: {
                                    pk: 10
                                }
                            },
                            featureInfo: {
                                template: "<div>test</div>",
                                format: FEATURE_INFO_FORMAT
                            }
                        }
                    ]
                }
            }
        };
        const baseConfig = {
            map: {
                layers: [
                    { type: 'osm', source: 'osm', group: 'background', visibility: true }
                ]
            }
        };
        const mapStoreMapConfig = toMapStoreMapConfig(resource, baseConfig);
        expect(mapStoreMapConfig).toEqual(
            {
                map: {
                    sources: {},
                    layers: [
                        { type: 'osm', source: 'osm', group: 'background', visibility: true },
                        { id: '02', type: 'vector', features: [] },
                        {
                            id: '03',
                            type: 'wms',
                            name: 'geonode:layer',
                            url: 'geoserver/wms',
                            style: 'geonode:style01',
                            extendedParams: {
                                mapLayer: {
                                    pk: 10,
                                    current_style: 'geonode:style01',
                                    extra_params: {
                                        msId: '03'
                                    },
                                    dataset: {
                                        pk: 1
                                    }
                                }
                            },
                            featureInfo: { template: "<div>test</div>", format: FEATURE_INFO_FORMAT }
                        }
                    ]
                }
            }
        );
    });
    it('should transform a resource to a mapstore map config and update backgrounds', () => {
        const resource = {
            maplayers: [
                {
                    pk: 10,
                    current_style: 'geonode:style01',
                    extra_params: {
                        msId: '03'
                    },
                    dataset: {
                        pk: 1
                    }
                }
            ],
            data: {
                map: {
                    layers: [
                        { id: '01', type: 'osm', source: 'osm', group: 'background', visibility: true },
                        { id: '02', type: 'vector', features: [] },
                        {
                            id: '03',
                            type: 'wms',
                            name: 'geonode:layer',
                            url: 'geoserver/wms',
                            style: 'geonode:style',
                            extendedParams: {
                                mapLayer: {
                                    pk: 10
                                }
                            }
                        }
                    ]
                }
            }
        };
        const baseConfig = {
            map: {
                layers: [
                    {
                        name: 'OpenTopoMap',
                        provider: 'OpenTopoMap',
                        source: 'OpenTopoMap',
                        type: 'tileprovider',
                        visibility: true,
                        group: 'background'
                    }
                ]
            }
        };
        const mapStoreMapConfig = toMapStoreMapConfig(resource, baseConfig);
        expect(mapStoreMapConfig).toEqual(
            {
                map: {
                    sources: {},
                    layers: [
                        {
                            name: 'OpenTopoMap',
                            provider: 'OpenTopoMap',
                            source: 'OpenTopoMap',
                            type: 'tileprovider',
                            visibility: true,
                            group: 'background'
                        },
                        { id: '02', type: 'vector', features: [] },
                        {
                            id: '03',
                            type: 'wms',
                            name: 'geonode:layer',
                            url: 'geoserver/wms',
                            style: 'geonode:style01',
                            extendedParams: {
                                mapLayer: {
                                    pk: 10,
                                    current_style: 'geonode:style01',
                                    extra_params: {
                                        msId: '03'
                                    },
                                    dataset: {
                                        pk: 1
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        );
    });

    it('transform a resource to a mapstore map config with featureinfo template', () => {
        const template = '<div>LAYER<div/>';
        const resource = {
            maplayers: [
                {
                    pk: 10,
                    current_style: 'geonode:style01',
                    extra_params: {
                        msId: '03'
                    },
                    dataset: {
                        pk: 1,
                        featureinfo_custom_template: '<div>Test</div>'
                    }
                }
            ],
            data: {
                map: {
                    layers: [
                        {
                            id: '03',
                            type: 'wms',
                            name: 'geonode:layer',
                            url: 'geoserver/wms',
                            style: 'geonode:style',
                            extendedParams: {
                                mapLayer: {
                                    pk: 10
                                }
                            },
                            featureInfo: {
                                template,
                                format: FEATURE_INFO_FORMAT
                            }
                        }
                    ]
                }
            }
        };
        const baseConfig = {
            map: {
                layers: [
                    { type: 'osm', source: 'osm', group: 'background', visibility: true }
                ]
            }
        };
        const mapStoreMapConfig = toMapStoreMapConfig(resource, baseConfig);
        expect(mapStoreMapConfig).toBeTruthy();
        const layers = mapStoreMapConfig.map.layers;
        expect(layers.length).toBe(2);
        expect(layers[1].featureInfo).toEqual({ template, format: FEATURE_INFO_FORMAT });
    });

    it('should parse style name into accepted format', () => {
        const styleObj = {
            name: 'testName',
            workspace: 'test'
        };

        const pasrsedStyleName = parseStyleName(styleObj);

        expect(pasrsedStyleName).toBe('test:testName');
    });

    it('should test canCopyResource with different resource type', () => {
        const user = { perms: ['add_resource'] };
        expect(canCopyResource({ resource_type: 'dataset', perms: ['download_resourcebase'], is_copyable: true }, user)).toBe(true);
        expect(canCopyResource({ resource_type: 'document', perms: ['download_resourcebase'], is_copyable: true }, user)).toBe(true);
        expect(canCopyResource({ resource_type: 'map', perms: [], is_copyable: true }, user)).toBe(true);
        expect(canCopyResource({ resource_type: 'geostory', perms: [], is_copyable: true }, user)).toBe(true);
        expect(canCopyResource({ resource_type: 'dashboard', perms: [], is_copyable: true }, user)).toBe(true);

        expect(canCopyResource({ resource_type: 'dataset', perms: [], is_copyable: true }, user)).toBe(false);
        expect(canCopyResource({ resource_type: 'document', perms: [], is_copyable: true }, user)).toBe(false);
        expect(canCopyResource({ resource_type: 'map', perms: [] }, user)).toBe(false);
        expect(canCopyResource({ resource_type: 'geostory', perms: [] }, user)).toBe(false);
        expect(canCopyResource({ resource_type: 'dashboard', perms: [] }, user)).toBe(false);
    });

    it('should test processUploadResponse', () => {
        const prev = [{
            id: 1,
            name: 'test1',
            create_date: '2022-04-13T11:24:55.444578Z',
            state: 'PENDING',
            progress: 0,
            complete: false
        },
        {
            id: 2,
            name: 'test2',
            create_date: '2022-04-13T11:24:54.042291Z',
            state: 'PENDING',
            progress: 0,
            complete: false
        },
        {
            id: 3,
            name: 'test3',
            create_date: '2022-04-13T11:24:54.042291Z',
            state: 'PENDING',
            progress: 20,
            complete: false
        }];
        const current = [{
            id: 1,
            name: 'test1',
            create_date: '2022-04-13T11:24:55.444578Z',
            state: 'RUNNING',
            progress: 100,
            complete: true
        },
        {
            id: 2,
            name: 'test2',
            create_date: '2022-04-13T11:24:54.042291Z',
            state: 'PENDING',
            progress: 40,
            complete: false,
            resume_url: 'test/upload/delete/439'
        },
        {
            id: 3,
            name: 'test3',
            create_date: '2022-04-13T11:24:54.042291Z',
            state: 'COMPLETE',
            progress: 100,
            complete: true
        },
        {
            id: 4,
            name: 'test4',
            create_date: '2022-04-13T11:24:54.042291Z',
            state: 'COMPLETE',
            progress: 100,
            complete: true
        },
        {
            exec_id: 23,
            name: 'test3',
            created: '2022-05-13T12:24:54.042291Z',
            status: 'running',
            complete: false
        }];

        expect(processUploadResponse([...prev, ...current])).toEqual([
            {
                exec_id: 23,
                name: 'test3',
                created: '2022-05-13T12:24:54.042291Z',
                status: 'running',
                complete: false,
                create_date: '2022-05-13T12:24:54.042291Z',
                id: 23
            },
            {
                id: 1,
                name: 'test1',
                create_date: '2022-04-13T11:24:55.444578Z',
                state: 'RUNNING',
                progress: 100,
                complete: true
            },
            {
                id: 4,
                name: 'test4',
                create_date: '2022-04-13T11:24:54.042291Z',
                state: 'COMPLETE',
                progress: 100,
                complete: true
            },
            {
                id: 3,
                name: 'test3',
                create_date: '2022-04-13T11:24:54.042291Z',
                state: 'COMPLETE',
                progress: 100,
                complete: true
            },
            {
                id: 2,
                name: 'test2',
                create_date: '2022-04-13T11:24:54.042291Z',
                state: 'PENDING',
                progress: 40,
                complete: false,
                resume_url: 'test/upload/delete/439'
            }
        ]);
    });

    it('should test parseUploadResponse', () => {
        const uploads = [
            {
                id: 3,
                name: 'test3',
                create_date: '2022-04-13T11:24:54.042291Z',
                state: 'COMPLETE',
                progress: 100,
                complete: true
            },
            {
                id: 2,
                name: 'test2',
                create_date: '2022-04-13T12:24:54.042291Z',
                state: 'PENDING',
                progress: 40,
                complete: false,
                resume_url: 'test/upload/delete/439'
            }
        ];

        expect(parseUploadResponse(uploads)).toEqual([
            {
                id: 2,
                name: 'test2',
                create_date: '2022-04-13T12:24:54.042291Z',
                state: 'PENDING',
                progress: 40,
                complete: false,
                resume_url: 'test/upload/delete/439'
            },
            {
                id: 3,
                name: 'test3',
                create_date: '2022-04-13T11:24:54.042291Z',
                state: 'COMPLETE',
                progress: 100,
                complete: true
            }
        ]);
    });

    it('should clean url', () => {
        const testUrl = 'https://test.com/dataset/808?filter=time';

        const url = cleanUrl(testUrl);

        expect(url).toEqual('https://test.com/dataset/808');
    });

    describe('Test getResourceTypesInfo', () => {
        it('test dataset of getResourceTypesInfo', () => {
            const {
                icon,
                canPreviewed,
                formatMetadataUrl,
                name
            } = getResourceTypesInfo()[ResourceTypes.DATASET];
            let resource = {
                perms: ['view_resourcebase'],
                store: "workspace",
                alternate: 'name:test',
                pk: "100"
            };
            expect(icon.glyph).toBe('dataset');
            expect(canPreviewed(resource)).toBeTruthy();
            expect(name).toBe('Dataset');

            expect(formatMetadataUrl(resource)).toBe('#/metadata/100');

        });
        it('test map of getResourceTypesInfo', () => {
            const {
                icon,
                canPreviewed,
                formatMetadataUrl,
                name
            } = getResourceTypesInfo()[ResourceTypes.MAP];
            let resource = {
                perms: ['view_resourcebase'],
                pk: "100"
            };
            expect(icon.glyph).toBe('1-map');
            expect(canPreviewed(resource)).toBeTruthy();
            expect(name).toBe('Map');
            expect(formatMetadataUrl(resource)).toBe('#/metadata/100');
        });
        it('test document of getResourceTypesInfo', () => {
            const {
                icon,
                canPreviewed,
                hasPermission,
                formatMetadataUrl,
                metadataPreviewUrl,
                name
            } = getResourceTypesInfo()[ResourceTypes.DOCUMENT];
            let resource = {
                perms: ['download_resourcebase'],
                pk: "100",
                extension: "pdf"
            };
            expect(icon.glyph).toBe('document');
            expect(canPreviewed(resource)).toBeTruthy();
            expect(hasPermission(resource)).toBeTruthy();
            expect(name).toBe('Document');
            expect(formatMetadataUrl(resource)).toBe('#/metadata/100');
            expect(metadataPreviewUrl(resource)).toBe('/metadata/100/embed');
        });
        it('test geostory of getResourceTypesInfo', () => {
            const {
                icon,
                canPreviewed,
                formatMetadataUrl,
                name
            } = getResourceTypesInfo()[ResourceTypes.GEOSTORY];
            let resource = {
                perms: ['view_resourcebase'],
                pk: "100"
            };
            expect(icon.glyph).toBe('geostory');
            expect(canPreviewed(resource)).toBeTruthy();
            expect(name).toBe('GeoStory');
            expect(formatMetadataUrl(resource)).toBe('#/metadata/100');
        });
        it('test dashboard of getResourceTypesInfo', () => {
            const {
                icon,
                canPreviewed,
                formatMetadataUrl,
                name
            } = getResourceTypesInfo()[ResourceTypes.DASHBOARD];
            let resource = {
                perms: ['view_resourcebase'],
                pk: "100"
            };
            expect(icon.glyph).toBe('dashboard');
            expect(canPreviewed(resource)).toBeTruthy();
            expect(name).toBe('Dashboard');
            expect(formatMetadataUrl(resource)).toBe('#/metadata/100');
        });
    });
    it('test isDocumentExternalSource', () => {
        let resource = { resource_type: "document", sourcetype: "REMOTE" };
        expect(isDocumentExternalSource(resource)).toBeTruthy();

        // LOCAL
        resource = {...resource, sourcetype: "LOCAL"};
        expect(isDocumentExternalSource(resource)).toBeFalsy();

        // NOT DOCUMENT
        resource = {...resource, resource_type: "dataset"};
        expect(isDocumentExternalSource(resource)).toBeFalsy();
    });
    it('test getDownloadUrlInfo', () => {
        const downloadData = {url: "/someurl", ajax_safe: true };

        // EXTERNAL SOURCE
        let resource = { download_urls: [downloadData], href: "/somehref", resource_type: "document", sourcetype: "REMOTE"};
        let downloadInfo = getDownloadUrlInfo(resource);
        expect(downloadInfo.url).toBe("/somehref");
        expect(downloadInfo.ajaxSafe).toBeFalsy();

        // AJAX SAFE
        resource = { download_urls: [downloadData]};
        downloadInfo = getDownloadUrlInfo(resource);
        expect(downloadInfo.url).toBe(downloadData.url);
        expect(downloadInfo.ajaxSafe).toBeTruthy();

        // HREF
        resource = {href: "/someurl"};
        downloadInfo = getDownloadUrlInfo(resource);
        expect(downloadInfo.url).toBe(resource.href);
        expect(downloadInfo.ajaxSafe).toBeFalsy();

        // NOT AJAX SAFE
        resource = {download_urls: [{...downloadData, ajax_safe: false}]};
        downloadInfo = getDownloadUrlInfo(resource);
        expect(downloadInfo.url).toBe(downloadData.url);
        expect(downloadInfo.ajaxSafe).toBeFalsy();
    });
    it('test getCataloguePath', () => {

        // default
        expect(getCataloguePath()).toBe('');

        // valid path and catalogPath not configured
        let path = '/catalogue/#/search/filter';
        expect(getCataloguePath(path)).toBe(path);

        const cPath = 'localConfig.geoNodeSettings.catalogPagePath';
        if (!window.__GEONODE_CONFIG__) window.__GEONODE_CONFIG__ = {};
        const prevValue = get(window.__GEONODE_CONFIG__, cPath);
        set(window.__GEONODE_CONFIG__, cPath, "/catalog/");

        // valid path and catalogPath configured
        expect(getCataloguePath(path)).toBe('/catalog/#/search/filter');

        // not catalogue path and catalogPath configured
        expect(getCataloguePath('/some/#/search/filter')).toBe('/some/#/search/filter');

        // reset value
        set(window.__GEONODE_CONFIG__, cPath, prevValue);
    });
    it("getResourceWithLinkedResources", () => {
        expect(getResourceWithLinkedResources({})).toEqual({});
        expect(getResourceWithLinkedResources()).toEqual({});
        expect(getResourceWithLinkedResources({pk: 1, linked_resources: {linked_to: ["1"], linked_by: ["1"]}}))
            .toEqual({pk: 1, linkedResources: {linkedBy: ["1"], linkedTo: ["1"]}});
        expect(getResourceWithLinkedResources({linked_resources: {linked_to: ["1"], linked_by: ["1"]}}))
            .toEqual({linkedResources: {linkedBy: ["1"], linkedTo: ["1"]}});
    });
    it('getResourceAdditionalProperties', () => {
        expect(getResourceAdditionalProperties({})).toEqual({});
        expect(getResourceAdditionalProperties()).toEqual({});
        expect(getResourceAdditionalProperties({pk: 1, linked_resources: {linked_to: ["1"], linked_by: ["1"]}}))
            .toEqual({pk: 1, linkedResources: {linkedBy: ["1"], linkedTo: ["1"]}});
        expect(getResourceAdditionalProperties({
            pk: 1,
            links: [
                {
                    extension: '3dtiles',
                    extras: {
                        type: 'asset',
                        content: {
                            title: 'Original',
                            description: null,
                            type: '3dtiles',
                            download_url: '/api/v2/assets/12/download'
                        }
                    },
                    link_type: 'uploaded',
                    mime: '',
                    name: 'tileset',
                    url: '/path'
                },
                {
                    extension: '3dtiles',
                    extras: {
                        type: 'asset',
                        content: {
                            title: null,
                            description: null,
                            type: '3dtiles',
                            download_url: '/api/v2/assets/12/download'
                        }
                    },
                    link_type: 'uploaded',
                    mime: '',
                    name: 'tileset',
                    url: '/path'
                },
                {
                    extension: 'xml',
                    link_type: 'metadata',
                    mime: 'text/xml',
                    name: 'ISO',
                    url: '/path'
                }
            ]
        }))
            .toEqual({
                pk: 1,
                assets: [
                    {
                        extension: '3dtiles',
                        extras: {
                            type: 'asset',
                            content: {
                                title: 'Original',
                                description: null,
                                type: '3dtiles',
                                download_url: '/api/v2/assets/12/download'
                            }
                        },
                        link_type: 'uploaded',
                        mime: '',
                        name: 'tileset',
                        url: '/path'
                    }
                ],
                links: [
                    {
                        extension: '3dtiles',
                        extras: {
                            type: 'asset',
                            content: {
                                title: 'Original',
                                description: null,
                                type: '3dtiles',
                                download_url: '/api/v2/assets/12/download'
                            }
                        },
                        link_type: 'uploaded',
                        mime: '',
                        name: 'tileset',
                        url: '/path'
                    },
                    {
                        extension: '3dtiles',
                        extras: {
                            type: 'asset',
                            content: {
                                title: null,
                                description: null,
                                type: '3dtiles',
                                download_url: '/api/v2/assets/12/download'
                            }
                        },
                        link_type: 'uploaded',
                        mime: '',
                        name: 'tileset',
                        url: '/path'
                    },
                    {
                        extension: 'xml',
                        link_type: 'metadata',
                        mime: 'text/xml',
                        name: 'ISO',
                        url: '/path'
                    }
                ]
            });
    });
    describe('getDimensions', () => {
        it('should return empty array if no links and has_time is false', () => {
            const result = getDimensions();
            expect(result).toEqual([]);
        });

        it('should return dimensions with time if has_time is true and WMTS link is present', () => {
            const links = [{ link_type: 'OGC:WMTS', url: 'http://example.com/wmts' }];
            const result = getDimensions({ links, has_time: true });
            expect(result).toEqual([{
                name: 'time',
                source: {
                    type: 'multidim-extension',
                    url: 'http://example.com/wmts'
                }
            }]);
        });

        it('should return dimensions with time if has_time is true and only WMS link is present', () => {
            const links = [{ link_type: 'OGC:WMS', url: 'http://example.com/geoserver/wms' }];
            const result = getDimensions({ links, has_time: true });
            expect(result).toEqual([{
                name: 'time',
                source: {
                    type: 'multidim-extension',
                    url: 'http://example.com/geoserver/gwc/service/wmts'
                }
            }]);
        });

        it('should return empty array if has_time is false', () => {
            const links = [{ link_type: 'OGC:WMTS', url: 'http://example.com/wmts' }];
            const result = getDimensions({ links, has_time: false });
            expect(result).toEqual([]);
        });

        it('should return default url if no matching link types are found', () => {
            const links = [{ link_type: 'OGC:OTHER', url: 'http://example.com/other' }];
            const result = getDimensions({ links, has_time: true });
            expect(result).toEqual([{
                name: 'time',
                source: {
                    type: 'multidim-extension',
                    url: '/geoserver/gwc/service/wmts'
                }
            }]);
        });
    });
    it('canManageResourceSettings', () => {
        expect(canManageResourceSettings({ perms: ['approve_resourcebase'] })).toBeTruthy();
        expect(canManageResourceSettings({ perms: ['view_resourcebase'] })).toBeFalsy();
    });
    it('canAccessPermissions', () => {
        expect(canAccessPermissions({ perms: ['change_resourcebase_permissions'] })).toBeTruthy();
        expect(canAccessPermissions({ perms: ['view_resourcebase'] })).toBeFalsy();
    });
    it('formatResourceLinkUrl', () => {
        expect(formatResourceLinkUrl({ uuid: '123' })).toContain('/catalogue/uuid/123');
        expect(formatResourceLinkUrl({ pk: '123' })).toNotContain('/catalogue/uuid/123');
    });
});
