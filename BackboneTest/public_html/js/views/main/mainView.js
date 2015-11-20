/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone, _, router, CryptoJS, Utils */

define([
    'app/login/login',
], function (Login) {
    var MainView = Backbone.View.extend({
        /*
         * configuration of view
         */
        el: $('body'),
        events: {
        },
        /*
         * methods
         */
        /**z
         * render view
         * @returns {undefined}
         */
        render: function () {
            if (Login.isLogged()) {
                console.log('logged');
            }
        },
        /**
         * on close view
         */
        close: function () {
            this.undelegateEvents(); //undelegate events in variable 'events'
        }
    });

    return MainView;
});