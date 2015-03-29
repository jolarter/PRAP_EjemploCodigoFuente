// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/main/mainSessionView',
  'views/main/mainCategoryView'
], function($, _, Backbone, MainSessionView, MainCategoryView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '/:idSession'   : 'showSession',
      '/:idCategory' : 'showCategory',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showSession', function(idSession){
        var idSession = idSession || 0;
        var view = new MainSessionView();
        view.render(idSession);
    });

    app_router.on('route:showCategory', function (idCategory) {
        var idCategory = idCategory || 0;
        var view = new MainCategoryView();
        view.render(idCategory);
    });


    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
