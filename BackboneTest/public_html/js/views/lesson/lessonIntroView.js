define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/lesson/lessonIntroTemplate.html'
], function($, _, Backbone, lessonIntroTemplate){

  var LessonIntroView = Backbone.View.extend({
    el: $("#container"),
    render: function(idCategory, idLesson){

        var that = this;
        //..
        var data = {};
        var compiledTemplate = _.template( lessonIntroTemplate, data );
        $("#container").html(compiledTemplate);
    }

  });

  return LessonIntroView;
  
});
