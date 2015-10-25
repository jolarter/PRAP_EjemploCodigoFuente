/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone, _ */

define([
    'text!templates/lesson/lessonEndTemplate.html'
], function (lessonEndTemplate) {

    var LessonEndView = Backbone.View.extend({
        el: $("#container"),
        render: function (idCategory, idLesson) {
            var that = this;
            //..
            var data = {};
            var compiledTemplate = _.template(lessonEndTemplate, data);
            $("#container").html(compiledTemplate);
        }
    });
    return LessonEndView;

});
