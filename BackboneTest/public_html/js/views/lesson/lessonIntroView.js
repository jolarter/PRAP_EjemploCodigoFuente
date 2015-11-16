/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone, _ */

define([
    'app/lesson/login',
    'text!templates/lesson/lessonIntroTemplate.html',
    'models/CategoryModel',
    'models/LessonModel',
    'collections/StepCollection',
    'collections/SolutionCollection',
    'views/lesson/lessonDownBarView'
], function (Login, lessonIntroTemplate, CategoryModel, LessonModel, StepCollection, SolutionCollection, LessonDownBarView) {

    var LessonIntroView = Backbone.View.extend({
        el: $("#leftmenu"),
        render: function (idCategory, idLesson) {
            var that = this;
            var category = new CategoryModel({idcategory: idCategory});
            category.fetch({success: function (cat) {
                    $('#topmenu').html(cat.get('name'));
                }});
            var lesson = new LessonModel({idlesson: idLesson});
            lesson.sync("read", lesson, {success: function (less) {
                    $('#topmenu1').html(less.name);
                }});
            /*
             // get all steps from server
             StepCollection.fetch({
             func: 'getAll',
             async: false,
             id_category: idCategory,
             id_lesson: idLesson,
             success: function (collection, response) {*/
            var data = {idCategory: idCategory, idLesson: idLesson, steps: StepCollection.models};
            var template = _.template(lessonIntroTemplate);
            var compiledTemplate = template(data);
            that.$el.html(compiledTemplate);
            /*}
             });*/

            // set the last step
            var last = _.last(StepCollection.models);
            if (last) {
                LessonDownBarView.setEndStep(last.get('idstep'));
            }
        }
    });

    return LessonIntroView;
});
