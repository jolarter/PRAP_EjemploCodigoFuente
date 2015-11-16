/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone, router */

define(function () {
    var instance = null;

    var LessonDownBarView = Backbone.View.extend({
        /*
         * variables
         */
        id_category: null,
        id_lesson: null,
        id_step: null,
        end_step: null,
        /*
         * configuration of view
         */
        el: $("#downbar"),
        events: {
            'click #next_step': 'next'
        },
        /*
         * methods
         */
        next: function () {
            router.navigate('#challenge/' + this.id_category + "/" + this.id_lesson + "/" + this.id_step, {trigger: true});
        },
        setIdCategory: function (id_category) {
            this.id_category = id_category;
        },
        setIdLesson: function (id_lesson) {
            this.id_lesson = id_lesson;
        },
        setIdStep: function (id_step) {
            this.id_step = id_step;
        },
        setEndStep: function (end_step) {
            this.end_step = end_step;
        }
    });

    LessonDownBarView.getInstance = function () {
        // summary:
        //      Gets an instance of the singleton. It is better to use 
        if (instance === null) {
            instance = new LessonDownBarView();
        }
        return instance;
    };

    return LessonDownBarView.getInstance();
});
