define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main/mainRegisterTemplate.html'
], function($, _, Backbone, mainRegisterTemplate){

  var MainRegisterView = Backbone.View.extend({
    el: $("#container"),
    render: function(){

        var that = this;
        //..
        var data = {};
        var compiledTemplate = _.template( mainRegisterTemplate, data );
        $("#container").html(compiledTemplate);
    }

  });

  return MainRegisterView;
  
});
