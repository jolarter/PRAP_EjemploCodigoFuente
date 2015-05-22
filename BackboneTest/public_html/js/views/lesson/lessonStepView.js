define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/lesson/lessonStepTemplate.html',
  'models/StepModel',
  'models/LessonModel'
], function($, _, Backbone, lessonStepTemplate,StepModel,LessonModel){

  var LessonStepView = Backbone.View.extend({
    el: $("#container"),   
    render: function(idCategory, idLesson, idStep){
        var lesson = new LessonModel({idlesson:idLesson});
    
        var step = new StepModel({idstep:idStep});
        step.sync("read",step,{success: function (step) {
                    $('#reto').html(lesson.step.challengue),
                    $('#pista').html(lesson.step.code),
                    $('#puntaje').html(lesson.step.points);
                    $('#topmenu2').html(lesson.step.name);
                }});
        var that = this;
                 
        var data = {step:step};
        var compiledTemplate = _.template( lessonStepTemplate, data );
            
        $("#container").html(compiledTemplate);
    }
  });
  
        
 
     
  return LessonStepView;
});
