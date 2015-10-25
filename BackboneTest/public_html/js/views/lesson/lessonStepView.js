/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

define([
    'text!templates/lesson/lessonStepTemplate.html',
    'models/StepModel',
    'models/LessonModel',
    'views/lesson/lessonDownBarView'
], function (lessonStepTemplate, StepModel, LessonModel, LessonDownBarView) {

    var LessonStepView = Backbone.View.extend({
        el: $("#container"),
        render: function (idCategory, idLesson, idStep) {


            var lesson = new LessonModel({idcategory: idCategory, idlesson: idLesson});
            var step = new StepModel({idstep: idStep});
            step.sync("read", step,
                    {success: function (step) {
                            $('#reto').html(step.challenge);
                            $('#pista').html(step.code);
                            ace.edit("editor").session.setValue(step.code);
                            $('#puntaje').html(step.points);
                            $('#topmenu2').html(step.name);
                        }
                    });

            //  var that = this;          
            var data = {step: step};
            var compiledTemplate = _.template(lessonStepTemplate, data);
            $("#container").html(compiledTemplate);
        }
    });




    return LessonStepView;
});
