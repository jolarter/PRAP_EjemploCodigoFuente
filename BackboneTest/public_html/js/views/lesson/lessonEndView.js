define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/lesson/lessonEndTemplate.html'
], function($, _, Backbone, lessonEndTemplate){

  var LessonEndView = Backbone.View.extend({
    el: $("#container"),
    render: function(idCategory, idLesson){

        var that = this;
        //..
        var data = {idCategory, idLesson};
        var compiledTemplate = _.template( lessonEndTemplate, data );
        $("#container").html(compiledTemplate);
    }

  });

  return LessonEndView;
  
});
