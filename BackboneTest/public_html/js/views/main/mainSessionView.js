define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main/mainSessionTemplate.html',
  'models/UsrModel'
 
  
], function($, _, Backbone, mainSessionTemplate,UsrModel){

  var MainSessionView = Backbone.View.extend({
    el: $(".navbar-wrapper"),
    render: function(iduser){
        var usr = new UsrModel({iduser:iduser});
        
        usr.sync("read",usr,{
            success: function (usr) {
                    $('#name').html(usr.name)
                }
            }
        );
        
        var that = this;
        var data = {iduser:iduser};
        
        var compiledTemplate = _.template( mainSessionTemplate, data );
        $("#container").html(compiledTemplate);
    }

  });

  return MainSessionView;
  
});
