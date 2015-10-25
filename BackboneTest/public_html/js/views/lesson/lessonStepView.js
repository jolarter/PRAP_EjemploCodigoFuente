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

            var code, regex, func;
            var editor;

            var lesson = new LessonModel({idcategory: idCategory, idlesson: idLesson});
            var step = new StepModel({idstep: idStep});

            step.sync("read", step,
                    {success: function (step) {

                            code = step.code;
                            func = step.eval;
                            regex = step.expression;

                            editor = ace.edit("editor");
                            editor.setOptions({
                                maxLines: Infinity,
                                theme: "ace/theme/twilight",
                                mode: "ace/mode/java"
                            });

                            $('#reto').html(step.challenge);
                            editor.session.setValue(step.code);
                            $('#puntaje').html(step.points);
                            $('#topmenu2').html(step.name);
                        }
                    });

            //  var that = this;          
            var data = {step: step};
            var compiledTemplate = _.template(lessonStepTemplate, data);
            $("#container").html(compiledTemplate);

            $('#validate').click(function () {

                var myRegexp = new RegExp(regex, 'gi');
                var match = myRegexp.exec(editor.getValue());

                var real_func = eval('[' + func + ']')[0];

                if (match !== null) {

                    var args = [];

                    for (var i = 1; i < match.length; i++) {
                        args.push(match[i]);
                    }
                    if (real_func.apply(this, args) === true) {
                        alert('Pasaste el reto!');
                        return;
                    }
                }

                alert('Muy mal, sigue intentando!');

            });

        }
    });




    return LessonStepView;
});
