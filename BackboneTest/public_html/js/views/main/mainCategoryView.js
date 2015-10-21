define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main/mainCategoryTemplate.html'
  
], function($, _, Backbone, mainCategoryTemplate){

  var MainCategoryView = Backbone.View.extend({
    el: $(".row"),
    render: function(){

        var that = this;
        //..
        var data = {};
        var compiledTemplate = _.template( mainCategoryTemplate, data );
        $("#Category").html(compiledTemplate);

    }

  });

  return MainCategoryView;
  
});
