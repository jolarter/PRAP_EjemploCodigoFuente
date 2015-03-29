define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main/mainSessionTemplate.html'
], function($, _, Backbone, SidebarView, template){

  var MainSessionView = Backbone.View.extend({
    el: $("#container"),
    render: function(idSession){

      //... 
    }

  });

  return MainSessionView;
  
});
