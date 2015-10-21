define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main/mainSessionTemplate.html'
  
], function($, _, Backbone, mainSessionTemplate){

  var MainSessionView = Backbone.View.extend({
    el: $(".navbar-wrapper"),
    render: function(){
        var that = this;
        //..
        var data = {};
        var compiledTemplate = _.template( mainSessionTemplate, data );
        $("#container").html(compiledTemplate);
    }

  });

  return MainSessionView;
  
});
