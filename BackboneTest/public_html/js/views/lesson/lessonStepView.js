define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/lesson/lessonStepTemplate.html'
], function($, _, Backbone, lessonStepTemplate){

  var LessonStepView = Backbone.View.extend({
    el: $("#container"),
    render: function(idCategory, idLesson, idStep){

        var that = this;
        //..
        var data = {};
        var compiledTemplate = _.template( lessonStepTemplate, data );
        $("#container").html(compiledTemplate);
    }

  });

  return LessonStepView;
  
});
