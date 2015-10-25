/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone */

/**
 * Load common code that includes config, then load the app logic for this page.
 */
requirejs(['../../common/common'], function () {
    /**
     * the main function
     */
    requirejs(common_libs, function () {

        var AppRouter = Backbone.Router.extend({
            routes: {
                // Define some URL routes
                ':idCategory/:idLesson/intro': 'showIntro',
                ':idCategory/:idLesson/end': 'showEnd',
                ':idCategory/:idLesson/:idStep': 'showStep',
                '': 'default'
                        // Default
                        //'*actions': 'showStep'
            }
        });

        var app_router = new AppRouter;

        app_router.on('route:showIntro', function (idCategory, idLesson) {
            requirejs(['app/lesson/route.showIntro'], function (callback) {
                callback(app_router, idCategory, idLesson);
            });
        });
        app_router.on('route:default', function () {
            requirejs(['app/lesson/route.default'], function (callback) {
                callback(app_router);
            });
        });

        app_router.on('route:showStep', function (idCategory, idLesson, idStep) {
            requirejs(['app/lesson/route.showStep'], function (callback) {
                callback(app_router, idCategory, idLesson, idStep);
            });
        });

        app_router.on('route:showEnd', function (idCategory, idLesson) {
            requirejs(['app/lesson/route.showEnd'], function (callback) {
                callback(app_router, idCategory, idLesson);
            });
        });

        Backbone.history.start();
    });
});