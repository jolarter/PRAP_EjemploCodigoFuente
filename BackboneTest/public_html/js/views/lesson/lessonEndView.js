/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone, _ */

define([
    'collections/SolutionCollection',
    'views/lesson/lessonDownBarView',
    'text!templates/lesson/lessonEndTemplate.html'
], function (SolutionCollection, LessonDownBarView, lessonEndTemplate) {

    var LessonEndView = Backbone.View.extend({
        el: $("#container"),
        template: _.template(lessonEndTemplate),
        events: {
            'click #home_button': 'goHome'
        },
        render: function (idCategory, idLesson) {

            // not more steps to next
            LessonDownBarView.setCurrentStep(null);
            // not leftmenu
            $('#leftmenu').hide();

            var points = 0;
            _.each(SolutionCollection.models, function (model) {
                points += model.get('points');
            });

            var compiledTemplate = this.template({points: points});
            this.$el.html(compiledTemplate);
        },
        goHome: function (e) {
            document.location.href = '../mainPage/index.html';
        }
    });

    return LessonEndView;
});
