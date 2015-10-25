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
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
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
        bootstrap: 'bootstrap/bootstrap.min',
        ace: 'ace/src-min-noconflict/ace',
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
var common_libs = ['jquery', 'backbone', 'underscore', 'ace'];