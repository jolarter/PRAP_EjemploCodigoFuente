define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main/mainCategoryTemplate.html'
], function($, _, Backbone, mainCategoryTemplate){

  var MainCategoryView = Backbone.View.extend({
    el: $("#container"),
    render: function(idCategory){

        var that = this;
        //..
        var data = {};
        var compiledTemplate = _.template( mainCategoryTemplate, data );
        $("#container").html(compiledTemplate);

    }

  });

  return MainCategoryView;
  
});
