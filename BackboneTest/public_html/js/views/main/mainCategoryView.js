define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main/mainCategoryTemplate.html'
], function($, _, Backbone, SidebarView, template){

  var MainCategoryView = Backbone.View.extend({
    el: $("#container"),
    render: function(idCategory){

      //... 
    }

  });

  return MainCategoryView;
  
});
