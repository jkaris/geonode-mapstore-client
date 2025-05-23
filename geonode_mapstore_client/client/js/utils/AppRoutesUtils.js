/*
 * Copyright 2022, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ResourceTypes } from '@js/utils/ResourceUtils';

export const appRouteComponentTypes = {
    VIEWER: 'ViewerRoute',
    CATALOGUE: 'CatalogueRoute',
    DATASET_UPLOAD: 'UploadDatasetRoute',
    DOCUMENT_UPLOAD: 'UploadDocumentRoute',
    COMPONENTS: 'ComponentsRoute',
    MAP_VIEWER: 'MapViewerRoute'
};

export const COMPONENTS_ROUTES = [
    {
        name: 'components',
        path: ['/'],
        component: appRouteComponentTypes.COMPONENTS
    }
];

export const MAP_ROUTES = [
    {
        name: 'map-viewer',
        path: ['/'],
        pageConfig: {
            resourceType: ResourceTypes.MAP
        },
        component: appRouteComponentTypes.MAP_VIEWER
    }
];

export const DASHBOARD_ROUTES = [{
    name: 'dashboard_embed',
    path: [
        '/'
    ],
    pageConfig: {
        resourceType: ResourceTypes.DASHBOARD
    },
    component: appRouteComponentTypes.VIEWER
}];

export const DOCUMENT_ROUTES = [{
    name: 'document_embed',
    path: [
        '/'
    ],
    pageConfig: {
        resourceType: ResourceTypes.DOCUMENT
    },
    component: appRouteComponentTypes.VIEWER
}];

export const GEOSTORY_ROUTES = [{
    name: 'geostory',
    path: ['/'],
    pageConfig: {
        resourceType: ResourceTypes.GEOSTORY
    },
    component: appRouteComponentTypes.VIEWER
}];

export const CATALOGUE_ROUTES = [
    {
        name: 'metadata',
        path: ['/metadata/:pk'],
        component: appRouteComponentTypes.VIEWER
    },
    {
        name: 'dataset_viewer',
        path: [
            '/dataset/:subtype/:pk'
        ],
        pageConfig: {
            resourceType: ResourceTypes.DATASET
        },
        component: appRouteComponentTypes.VIEWER
    },
    {
        name: 'dataset_viewer',
        path: [
            '/dataset/:pk'
        ],
        pageConfig: {
            resourceType: ResourceTypes.DATASET
        },
        component: appRouteComponentTypes.VIEWER
    },
    {
        name: 'dataset_edit_data_viewer',
        path: [
            '/dataset/:pk/edit/data'
        ],
        pageConfig: {
            resourceType: ResourceTypes.DATASET
        },
        component: appRouteComponentTypes.VIEWER
    },
    {
        name: 'dataset_edit_layer_settings',
        path: [
            '/dataset/:pk/edit/settings'
        ],
        pageConfig: {
            resourceType: ResourceTypes.DATASET
        },
        component: appRouteComponentTypes.VIEWER
    },
    {
        name: 'map_viewer',
        path: [
            '/map/:pk'
        ],
        pageConfig: {
            resourceType: ResourceTypes.MAP
        },
        component: appRouteComponentTypes.MAP_VIEWER
    },
    {
        name: 'geostory_viewer',
        path: [
            '/geostory/:pk'
        ],
        pageConfig: {
            resourceType: ResourceTypes.GEOSTORY
        },
        component: appRouteComponentTypes.VIEWER
    },
    {
        name: 'document_viewer',
        path: [
            '/document/:pk'
        ],
        pageConfig: {
            resourceType: ResourceTypes.DOCUMENT
        },
        component: appRouteComponentTypes.VIEWER
    },
    {
        name: 'dashboard_viewer',
        path: [
            '/dashboard/:pk'
        ],
        pageConfig: {
            resourceType: ResourceTypes.DASHBOARD
        },
        component: appRouteComponentTypes.VIEWER
    },
    {
        name: 'viewer',
        path: [
            '/viewer/:pk/map/:mapPk'
        ],
        pageConfig: {
            resourceType: ResourceTypes.VIEWER
        },
        component: appRouteComponentTypes.VIEWER
    },
    {
        name: 'viewer',
        path: [
            '/viewer/:pk'
        ],
        pageConfig: {
            resourceType: ResourceTypes.VIEWER
        },
        component: appRouteComponentTypes.VIEWER
    },
    {
        name: 'catalogue',
        path: [
            '/'
        ],
        component: appRouteComponentTypes.CATALOGUE
    },
    {
        name: 'upload_dataset',
        path: ['/upload/dataset'],
        component: appRouteComponentTypes.DATASET_UPLOAD,
        protectedRoute: true,
        hash: "#/upload/dataset"
    },
    {
        name: 'upload_document',
        path: ['/upload/document'],
        component: appRouteComponentTypes.DOCUMENT_UPLOAD,
        protectedRoute: true,
        hash: "#/upload/document"
    }
];
