/**
 * set the main configuration of require.js
 */
requirejs.config({
    baseUrl: '/BackboneTest/js/libs/',
    shim: {
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'backbone_router_filter': {
            deps: ['backbone', 'underscore'],
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'cookie': {
            deps: ['jquery']
        },
        'app': {
            deps: ['jquery', 'backbone', 'underscore', 'ace']
        },
        'models': {
            deps: ['jquery', 'backbone', 'underscore', 'ace']
        },
        'views': {
            deps: ['jquery', 'backbone', 'underscore', 'ace']
        },
        'collections': {
            deps: ['jquery', 'backbone', 'underscore', 'ace']
        },
    },
    paths: {
        /*
         * RequereJS Plugins
         */
        text: 'require/plugins/text',
        /*
         * Libs
         */
        jquery: 'jquery/jquery-2.1.4.min',
        underscore: 'underscore/underscore-min',
        backbone: 'backbone/backbone-min',
        backbone_router_filter: 'backbone/plugins/backbone.routefilter',
        bootstrap: 'bootstrap/bootstrap.min',
        ace: 'ace/src-min-noconflict/ace',
        cookie: 'cookie/jquery.cookie',
        sha1: 'cryptojs/sha1',
        utils: 'utils/utils',
        /*
         * Custom
         */
        app: '../modules',
        templates: '../../templates',
        views: '../views',
        models: '../models',
        collections: '../collections'
    }

});

/**
 * common dependencies to inject in all modules
 * @type Array
 */
var common_libs = ['jquery', 'backbone', 'underscore', 'backbone_router_filter', 'bootstrap', 'ace', 'cookie', 'sha1', 'utils'];