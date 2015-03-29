define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/lesson/lessonStepTemplate.html'
], function($, _, Backbone, SidebarView, template){

  var LessonStepView = Backbone.View.extend({
    el: $("#container"),
    render: function(idCategory, idLesson, idStep){

      //... 
    }

  });

  return LessonStepView;
  
});
