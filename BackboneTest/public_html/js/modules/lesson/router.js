// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/lesson/lessonIntroView',
  'views/lesson/lessonStepView',
  'views/lesson/lessonEndView'
 // 'views/editor/editorView'
], function($, _, Backbone, LessonIntroView, LessonStepView, LessonEndView ,EditorView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      ':idCategory/:idLesson/intro'   : 'showIntro',
      ':idCategory/:idLesson/end'     : 'showEnd',
      ':idCategory/:idLesson/:idStep' : 'showStep',
      'Editor/'                       : 'showEditor',  
      '' : 'default'
      // Default
      //'*actions': 'showStep'
    }
  });
  
  var initialize = function(){
    var app_router = new AppRouter;
    
    app_router.on('route:showIntro', function(idCategory,idLesson){
        idCategory = idCategory || 0;
        idLesson = idLesson || 0;
        var view = new LessonIntroView();
        view.render(idCategory,idLesson);
    });
    app_router.on('route:default', function(){
        app_router.navigate('#1/1/intro',{trigger: true});
    });

    app_router.on('route:showStep', function (idCategory, idLesson, idStep) {
        idCategory = idCategory || 0;
        idLesson = idLesson || 0;
        idStep = idStep || 0;
        var view = new LessonStepView();
        view.render(idCategory, idLesson , idStep);
        
        console.log('entro a esta ruta route:Showstep');
    });

    app_router.on('route:showEnd', function (idCategory, idLesson) {
        idCategory = idCategory || 0;
        idLesson = idLesson || 0;
        var view = new LessonEndView();
        view.render(idCategory, idLesson);
        console.log('entro a esta ruta route:ShowEnd');
    });

  app_router.on('route:showEditor', function (from , to) {
        f= from || 0;
        t= to || 20;
        var view= new EditorView();
        view.render(f,t);
       // We have no matching route, lets display the home page 
        //var homeView = new HomeView();
        //homeView.render();
    });

   // PARTE DE LA CONSOLA
    app_router.on('route:defaultAction', function (actions) {
        var view = new LessonStepView();
        view.render(0, 0, 0);
        console.log('entro a esta ruta route:defaultAction');
       // We have no matching route, lets display the home page 
        //var homeView = new HomeView();
        //homeView.render();
    });
	
    
    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    // var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
