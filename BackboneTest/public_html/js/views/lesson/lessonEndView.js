define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/lesson/lessonEndTemplate.html'
], function($, _, Backbone, SidebarView, template){

  var LessonEndView = Backbone.View.extend({
    el: $("#container"),
    render: function(idCategory, idLesson){

      //... 
    }

  });

  return LessonEndView;
  
});
