/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone, _, router */

define([
    'app/lesson/login',
    'text!templates/lesson/lessonLeftBarTemplate.html',
    'text!templates/lesson/lessonIntroTemplate.html',
    'models/CategoryModel',
    'models/LessonModel',
    'collections/StepCollection',
    'views/lesson/lessonDownBarView'
], function (Login, lessonLeftBarTemplate, lessonIntroTemplate, CategoryModel, LessonModel, StepCollection, LessonDownBarView) {
    var instance = null;

    var LessonIntroView = Backbone.View.extend({
        /*
         * variables
         */
        id_category: null,
        id_lesson: null,
        category_model: null,
        lesson_model: null,
        sync_models: false,
        /*
         * configuration of view
         */
        el: $("body"),
        template: _.template(lessonIntroTemplate),
        events: {
            'click #intro_button': 'goIntro',
            'click #leftbar li a': 'leftbar'
        },
        /*
         * methods
         */
        render: function (idCategory, idLesson) {
            var self = this;

            // fill some variables
            if (idCategory && idLesson) {
                this.id_category = idCategory;
                this.id_lesson = idLesson;
            }

            /*
             * get category and lesson (once)
             */
            if (!this.sync_models) {
                this.syncModels(this.id_category, this.id_lesson, function () {
                    self.setup();
                    self.sync_models = true;
                });
            } else {
                this.setup();
            }
        },
        setup: function () {
            this.$('#topmenu').html(this.category_model.get('name'));
            this.$('#topmenu1').html(this.lesson_model.get('name'));
            this.$('#topmenu2').html("");

            this.$('#container').html(this.template({
                user_name: Login.getUsername(),
                category_name: this.category_model.get('name'),
                category_text: this.category_model.get('description'),
                lesson_name: this.lesson_model.get('name'),
                lesson_text: this.lesson_model.get('description')
            }));

            // leftbar
            var data = {idCategory: this.id_category, idLesson: this.id_lesson, steps: StepCollection.models};
            var template = _.template(lessonLeftBarTemplate);
            var compiledTemplate = template(data);
            this.$('#leftmenu').html(compiledTemplate);

            // set the last step
            LessonDownBarView.setCurrentStep(null);
            var last = _.last(StepCollection.models);
            if (last) {
                LessonDownBarView.setEndStep(last.get('idstep'));
            }

            // enable first step
            var first = _.first(StepCollection.models);
            if (first) {
                this.enableStep(first.get('idstep'), true);
            }

            // show leftmenu
            $('#leftmenu').show();
        },
        syncModels: function (id_category, id_lesson, callback) {
            var self = this;

            this.category_model = new CategoryModel({idcategory: id_category});
            this.category_model.fetch({success: function () {
                    self.lesson_model = new LessonModel({idlesson: id_lesson});
                    self.lesson_model.fetch({success: function () {
                            callback();
                        }});
                }});
        },
        leftbar: function (e) {
            var $this = this.$(e.target);

            if ($this.parent().hasClass('disabled')) {
                e.preventDefault();
                return false;
            }

            this.$('#leftbar li').removeClass('active');
            $this.parent().addClass('active');
        },
        goIntro: function (e) {
            router.navigate('#challenge/' + this.id_category + '/' + this.id_lesson);
            this.render();
            e.preventDefault();
            return false;
        },
        enableStep: function (id_step, enable) {
            var step = this.$('#step_menu_' + id_step);
            (enable) ? step.removeClass('disabled') : step.addClass('disabled');
        }
    });

    LessonIntroView.getInstance = function () {
        // summary:
        //      Gets an instance of the singleton. It is better to use 
        if (instance === null) {
            instance = new LessonIntroView();
        }
        return instance;
    };

    return LessonIntroView.getInstance();
});
