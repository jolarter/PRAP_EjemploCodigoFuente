define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/lesson/lessonIntroTemplate.html'
], function($, _, Backbone, SidebarView, template){

  var LessonIntroView = Backbone.View.extend({
    el: $("#container"),
    render: function(idCategory, idLesson){

      //... 
    }

  });

  return LessonIntroView;
  
});
