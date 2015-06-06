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
      'User/:idSession'   : 'showSession',
      'Category/:idCategory' : 'showCategory',
      // Default
      '*actions': 'defaultAction',
           
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter();
    
    app_router.on('route:showSession', function(idSession){
        var view = new MainSessionView();
        view.render(idSession);
        
    });

    app_router.on('route:showCategory', function (idcategory) {
        console.log("categoria");   
        var view = new MainCategoryView();
        view.render(idcategory);
    });
    
    app_router.on('route:defaultAction', function () {
        //var view = new MainSessionView();
        //view.render();
        
       // We have no matching route, lets display the home page 
        //var homeView = new HomeView();
        //homeView.render();
    });
    
    
    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    //var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
