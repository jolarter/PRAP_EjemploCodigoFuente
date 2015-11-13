/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone, _ */

define([
    'text!templates/lesson/lessonLoginTemplate.html'
], function (lessonLoginTemplate) {
    var LessonLoginView = Backbone.View.extend({
        el: $('#container'),
        template: _.template(lessonLoginTemplate),
        events: {
            'click #ok': 'clickOk'
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        clickOk: function () {
            alert('clicked!');
        }
    });
    return LessonLoginView;
});