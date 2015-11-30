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
                'challenge/:idCategory/:idLesson': 'showIntro',
                'challenge/:idCategory/:idLesson/:idStep': 'showStep',
                'end/:idCategory/:idLesson': 'showEnd',
                'exit': 'showExit',
                'logout': 'showLogout',
                '': 'default',
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

                // check if logged
                if (!Login.isLogged()) {
                    if (route !== 'exit') {
                        this.navigate('#exit', {trigger: true, replace: true});
                        return false;
                    }
                }

                /*
                 * custom rules
                 */
                // load nesesary data
                if (!data_loaded && params.length >= 2) {

                    // get all steps from server
                    StepCollection.fetch({
                        func: 'getAll',
                        async: false,
                        id_category: params[0],
                        id_lesson: params[1],
                        success: function (collection, response) {
                            //...
                        }
                    });

                    // get all solutions from server
                    SolutionCollection.fetch({
                        func: 'getAll',
                        async: false,
                        token: Login.getToken(),
                        success: function (collection, response) {
                            //...
                        }
                    });
                    data_loaded = true;
                    // first page
                    this.navigate('');
                    this.navigate('challenge/' + params[0] + '/' + params[1], {trigger: true, replace: true});
                    return false;
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
                requirejs(['app/lesson/route.default'], function (callback) {
                    self.trash.push(callback());
                });
            },
            showIntro: function (idCategory, idLesson) {
                var self = this;
                requirejs(['app/lesson/route.showIntro'], function (callback) {
                    self.trash.push(callback(idCategory, idLesson));
                });
            },
            showStep: function (idCategory, idLesson, idStep) {
                var self = this;
                requirejs(['app/lesson/route.showStep'], function (callback) {
                    self.trash.push(callback(idCategory, idLesson, idStep));
                });
            },
            showEnd: function (idCategory, idLesson) {
                var self = this;
                requirejs(['app/lesson/route.showEnd'], function (callback) {
                    self.trash.push(callback(idCategory, idLesson));
                });
            },
            showExit: function () {
                var self = this;
                requirejs(['app/lesson/route.showExit'], function (callback) {
                    self.trash.push(callback());
                });
            },
            showLogout: function () {
                var self = this;
                requirejs(['app/lesson/route.showLogout'], function (callback) {
                    self.trash.push(callback());
                });
            }
        });
        router = new AppRouter;
        Backbone.history.start();
    });
});