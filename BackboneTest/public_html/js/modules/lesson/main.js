/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone */

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
    requirejs(['app/lesson/login'].concat(common_libs), function (login) {

        var AppRouter = Backbone.Router.extend({
            /*
             * configuration of router
             */
            routes: {
                // Define some URL routes
                'login': 'showLogin',
                'challenge/:idCategory/:idLesson': 'showIntro',
                'challenge/:idCategory/:idLesson/:idStep': 'showStep',
                ':idCategory/:idLesson/end': 'showEnd',
                '': 'default',
            },
            /**
             * filter before route
             * @param {type} route
             * @param {type} params
             * @returns {Boolean}
             */
            before: function (route, params) {
                console.log(route, params);
                if (!login.isLogged() && route !== 'login') {
                    this.navigate('#login', {trigger: true});
                    return false;
                }
            },
            /*
             * methods
             */
            default: function () {
                requirejs(['app/lesson/route.default'], function (callback) {
                    callback();
                });
            },
            showLogin: function () {
                requirejs(['app/lesson/route.showLogin'], function (callback) {
                    callback();
                });
            },
            showIntro: function (idCategory, idLesson) {
                requirejs(['app/lesson/route.showIntro'], function (callback) {
                    callback(idCategory, idLesson);
                });
            },
            showStep: function (idCategory, idLesson, idStep) {
                requirejs(['app/lesson/route.showStep'], function (callback) {
                    callback(idCategory, idLesson, idStep);
                });
            },
            showEnd: function (idCategory, idLesson) {
                requirejs(['app/lesson/route.showEnd'], function (callback) {
                    callback(idCategory, idLesson);
                });
            }
        });

        router = new AppRouter;
        Backbone.history.start();
    });
});