define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main/mainChangePasswordTemplate.html'
], function($, _, Backbone, mainChangePasswordTemplate){

  var MainChangePasswordView = Backbone.View.extend({
    el: $("#container"),
    render: function(t){

        var that = this;
        //..
        var data = {};
        var compiledTemplate = _.template( mainChangePasswordTemplate, data );
        $("#container").html(compiledTemplate);
    }

  });

  return MainChangePasswordView;
  
});
