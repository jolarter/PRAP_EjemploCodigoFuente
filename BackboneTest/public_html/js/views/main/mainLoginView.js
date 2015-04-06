define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main/mainLoginTemplate.html'
], function($, _, Backbone, mainLoginTemplate){

  var MainLoginView = Backbone.View.extend({
    el: $("#container"),
    render: function(){

        var that = this;
        //..
        var data = {};
        var compiledTemplate = _.template( mainLoginTemplate, data );
        $("#container").html(compiledTemplate);
    }

  });

  return MainLoginView;
  
});
