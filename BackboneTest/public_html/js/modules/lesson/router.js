// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/lesson/lessonIntroView',
  'views/lesson/lessonStepView',
  'views/lesson/lessonEndView'
], function($, _, Backbone, LessonIntroView, LessonStepView, LessonEndView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '/:idCategory/:idLesson/intro'   : 'showIntro',
      '/:idCategory/:idLesson/:idStep' : 'showStep',
      '/:idCategory/:idLesson/end'     : 'showEnd',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showIntro', function(idCategory,idLesson){
        var idCategory = idCategory || 0;
        var idLesson = idLesson || 0;
        var view = new LessonIntroView();
        view.render(idCategory,idLesson);
    });

    app_router.on('route:showStep', function (idCategory, idLesson, idStep) {
        var idCategory = idCategory || 0;
        var idLesson = idLesson || 0;
        var idStep = idStep || 0;
        var view = new LessonStepView();
        view.render(idCategory, idLesson, idStep);
    });

    app_router.on('route:showEnd', function (idCategory, idLesson) {
        var idCategory = idCategory || 0;
        var idLesson = idLesson || 0;
        var view = new LessonEndView();
        view.render(idCategory, idLesson);
    });

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
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
