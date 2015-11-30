/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone, _ */

/**
 * the router of module
 * @type Backbone.Router
 */
var router = null;

/**
 * Load common code that includes config, then load the app logic for this page.
 */
requirejs(['../../common/common'], function () {
    /**
     * the main function
     */
    requirejs(['app/login/login',
        'collections/StepCollection',
        'collections/SolutionCollection'].concat(common_libs), function (Login, StepCollection, SolutionCollection) {
        var data_loaded = false;

        var AppRouter = Backbone.Router.extend({
            /*
             * variables
             */
            /**
             * history of fragments
             */
            history: [],
            /**
             * trash
             */
            trash: [],
            /*
             * configuration of router
             */
            routes: {
                // Define some URL routes
                'login': 'showLogin',
                'register': 'showRegister',
                'logout': 'showLogout',
                '': 'default'
            },
            /**
             * filter before route
             * @param {type} route
             * @param {type} params
             * @returns {Boolean}
             */
            before: function (route, params) {

                // pick up the memory trash
                if (this.trash.length > 0) {
                    for (var i = 0; i < this.trash.length; i++) {
                        if (this.trash[i] && this.trash[i].destroy) {
                            this.trash[i].destroy();
                        }
                    }
                    // clear trash
                    this.trash = [];
                }

                // log history off urls
                this.history.push({fragment: route, params: params});
                console.log(route, params);

            },
            /*
             * methods
             */
            default: function () {
                var self = this;
                requirejs(['app/main/route.default'], function (callback) {
                    self.trash.push(callback());
                });
            },
            showLogin: function () {
                var self = this;
                requirejs(['app/main/route.showLogin'], function (callback) {
                    self.trash.push(callback());
                });
            },
            showRegister: function () {
                var self = this;
                requirejs(['app/main/route.showRegister'], function (callback) {
                    self.trash.push(callback());
                });
            },
            showLogout: function () {
                var self = this;
                requirejs(['app/main/route.showLogout'], function (callback) {
                    self.trash.push(callback());
                });
            }
        });
        router = new AppRouter;
        Backbone.history.start();
    });
});