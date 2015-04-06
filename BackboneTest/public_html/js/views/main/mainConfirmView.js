define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main/mainConfirmTemplate.html'
], function($, _, Backbone, mainConfirmTemplate){

  var MainConfirmView = Backbone.View.extend({
    el: $("#container"),
    render: function(t){

        var that = this;
        //..
        var data = {};
        var compiledTemplate = _.template( mainConfirmTemplate, data );
        $("#container").html(compiledTemplate);
    }

  });

  return MainConfirmView;
  
});
