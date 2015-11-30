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
            this.menuShow(Login.isLogged());
        },
        menuShow: function (logged) {
            (logged) ? $('#login_li').hide() : $('#login_li').show();
            (logged) ? $('#register_li').hide() : $('#register_li').show();
            (logged) ? $('#user_li').show() : $('#user_li').hide();
            (logged) ? $('#logout_li').show() : $('#logout_li').hide();
            if (logged) {
                $('#user_li').children().children().html(Login.getUsername());
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