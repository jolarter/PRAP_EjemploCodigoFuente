/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone, _, router */

define([
    'app/lesson/login',
    'text!templates/lesson/lessonLoginTemplate.html'
], function (login, lessonLoginTemplate) {
    var LessonLoginView = Backbone.View.extend({
        /*
         * variables
         */
        dash_html: '',
        /*
         * configuration of view
         */
        el: $('body'),
        template: _.template(lessonLoginTemplate),
        events: {
            'click #login': 'loginBtn'
        },
        /*
         * methods
         */
        render: function () {
            // hide dashboard
            this.dash_html = this.$el.html();
            // show login
            this.$el.html(this.template());
            return this;
        },
        loginBtn: function () {
            login.newLogin();
            if (login.isLogged()) {
                // show dashboard
                this.$el.html(this.dash_html);
            }
            router.navigate('', {trigger: true});
            return false;
        }
    });
    return LessonLoginView;
});