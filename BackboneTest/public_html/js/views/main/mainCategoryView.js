define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main/mainCategoryTemplate.html',
  'models/CategoryModel'
  
], function($, _, Backbone, mainCategoryTemplate,CategoryModel){

  var MainCategoryView = Backbone.View.extend({
    el: $(".row"),
    render: function(idcategory){
        var ctry = new CategoryModel({idcategory:idcategory});
        
        ctry.sync("read",ctry,{
            success: function (ctry) {
                    $('#name').html(ctry.name);
                    $('#description').html(ctry.description);
                }
            }
        );
        var that = this;
        //..
        var data = {};
        var compiledTemplate = _.template( mainCategoryTemplate, data );
        $("#Category").html(compiledTemplate);

    }

  });

  return MainCategoryView;
  
});
