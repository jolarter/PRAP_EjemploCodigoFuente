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
        next_step: null,
        current_step: null,
        end_step: null,
        button: this.$('#next_step'),
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
            var step = $('#step_menu_' + this.next_step);
            step.removeClass('disabled');

            if (this.current_step !== this.end_step) {
                router.navigate('#challenge/' + this.id_category + "/" + this.id_lesson + "/" + this.next_step, {trigger: true});
            } else {
                router.navigate('#end/' + this.id_category + "/" + this.id_lesson, {trigger: true});
            }
        },
        setIdCategory: function (id_category) {
            this.id_category = id_category;
        },
        setIdLesson: function (id_lesson) {
            this.id_lesson = id_lesson;
        },
        setNextStep: function (next_step) {
            this.next_step = next_step;
        },
        setCurrentStep: function (current_step) {
            this.current_step = current_step;

            $('#leftbar li').removeClass('active');
            $('#step_menu_' + current_step).addClass('active');

            (this.current_step) ? this.button.show() : this.button.hide();

            // setup final step
            if (this.current_step === this.end_step) {
                this.button.html('Finalizar');
            } else {
                // setup next step
                this.button.html('Siguiente');
            }
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
