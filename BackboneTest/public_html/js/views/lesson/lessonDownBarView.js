define([
    'jquery',
    'underscore',
    'backbone',
    'modules/lesson/router',
    'collections/StepCollection'
    
], function ($, _, Backbone, Router,StepCollection) {
    
    
    window.idStep=new StepCollection();
    var LessonDownBarView = Backbone.View.extend({
 
        idLesson: '',
        idCategory: '',
        idStep: '',
        arr:null,
     // arr:stepcollec,
        
  
        
        
        el: $("#barrainferior"),
        render: function (idCategory, idLesson) {
           
        },
        events : {
            "click #btnnext" : "next"
             
        },
        next : function(evt){
            location.href = "#"+this.idCategory+"/"+this.idLesson+"/"+this.idStep;
        }
    });
    return LessonDownBarView;
});
