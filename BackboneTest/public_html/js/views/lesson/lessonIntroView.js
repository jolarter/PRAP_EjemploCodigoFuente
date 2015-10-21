define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/lesson/lessonIntroTemplate.html',
    'models/CategoryModel',
    'models/LessonModel',
    'collections/StepCollection',
    'views/lesson/lessonDownBarView'
], function ($, _, Backbone, lessonIntroTemplate, CategoryModel, LessonModel, StepCollection, LessonDownBarView) {

    var LessonIntroView = Backbone.View.extend({
        el: $("#container"),
        render: function (idCategory, idLesson) {
            this.l = new LessonDownBarView();
            this.l.idLesson = idLesson;
            this.l.idCategory = idCategory;
          
            var that = this;
            var category = new CategoryModel({idcategory: idCategory});
            category.fetch({success: function (cat) {
                    $('#topmenu').html(cat.get('name'));
                }});
            var lesson = new LessonModel({idlesson: idLesson});
            lesson.sync("read", lesson, {success: function (less) {
                    $('#topmenu1').html(less.name);

                }});

             
            var stepcollec = new StepCollection();
            stepcollec.sync("getStep", stepcollec,
                    {
                        success: function (step) {
                            var data = {idCategory: idCategory, idLesson: idLesson, steps: step};
                            that.l.idStep = step[0].idstep;
                            var template = _.template(lessonIntroTemplate);
                            var compiledTemplate = template(data);
                            $('#leftmenu').html(compiledTemplate);
                            $('#container').html();
                        },
                        error: function () {
                            alert('hola')
                        },
                        idCategory: idCategory, idLesson: idLesson
                    }
            );
        }
        
        

    });
    return LessonIntroView;
});
