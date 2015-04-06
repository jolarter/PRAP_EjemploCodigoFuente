define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main/mainForgotPasswordTemplate.html'
], function($, _, Backbone, mainForgotPasswordTemplate){

  var MainForgotPasswordView = Backbone.View.extend({
    el: $("#container"),
    render: function(){

        var that = this;
        //..
        var data = {};
        var compiledTemplate = _.template( mainForgotPasswordTemplate, data );
        $("#container").html(compiledTemplate);
    }

  });

  return MainForgotPasswordView;
  
});
