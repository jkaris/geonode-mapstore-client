/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Observable } from 'rxjs';
import { addApi, setApi } from '@mapstore/framework/api/persistence';
import { getMaps, getMapByPk, getResources as gnGetResources } from '@js/api/geonode/v2';
import { getFacetItems } from '@js/api/geonode/v2/facets';
import { parseCatalogResource } from '@js/utils/ResourceUtils';
import { getCustomMenuFilters } from '@js/selectors/config';

const getResource = (pk) => {
    return Observable.defer(() => {
        return getMapByPk(pk)
            .then((resource) => {
                return {
                    ...resource,
                    data: {
                        ...resource?.data,
                        map: {
                            ...resource?.data?.map,
                            extraParams: {
                                ...resource?.data?.map?.extraParams,
                                // add the original pk to keep track in future synchronizations
                                pk: resource?.pk
                            }
                        }
                    }
                };
            });
    });
};

const getResources = ({ category, options, query }) => {
    const { start, limit: pageSize } = options?.params;
    return Observable.defer(() =>
        category === 'MAP'
            ? getMaps({
                q: query,
                pageSize,
                page: (start / pageSize) + 1
            })
                .then(({ totalCount, resources }) => {
                    return {
                        results: resources.map((resource) => {
                            return {
                                // we need to return a number as id to ensure mapstore uses the persistence api
                                id: parseFloat(resource.pk),
                                name: resource.title,
                                description: resource.abstract,
                                thumbnail: resource.thumbnail_url,
                                map: resource
                            };
                        }),
                        totalCount
                    };
                })

            : new Promise(resolve => resolve({ results: [], totalCount: 0 }))
    );
};

const persistence = {
    getResource,
    getResources,
    getCatalogResources: ({ params, config, monitoredState }) => {
        return Observable.defer(() => {
            const customFilters = getCustomMenuFilters(monitoredState);
            return gnGetResources({
                ...params,
                config,
                customFilters
            }).then(({ resources, ...response }) => {
                return {
                    ...response,
                    resources: resources.map(parseCatalogResource)
                };
            });
        });
    },
    getCatalogFacets: (...args) => {
        return Observable.defer(() => {
            return getFacetItems(...args);
        });
    }
};

// register geonode api
// and set them as the active one
addApi('geonode', persistence);
setApi('geonode');

export default persistence;
