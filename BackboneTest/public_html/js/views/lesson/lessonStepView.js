/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global Backbone, _, ace */

define([
    'app/lesson/login',
    'models/SolutionModel',
    'collections/StepCollection',
    'collections/SolutionCollection',
    'views/lesson/lessonDownBarView',
    'text!templates/lesson/lessonStepTemplate.html',
], function (Login, SolutionModel, StepCollection, SolutionCollection, LessonDownBarView, lessonStepTemplate) {

    var LessonStepView = Backbone.View.extend({
        /*
         * variables
         */
        code: '',
        regex: '',
        func: '',
        editor: '',
        points: 0,
        solution_model: null,
        id_category: null,
        id_lesson: null,
        id_step: null,
        /*
         * configuration of view
         */
        el: $('#container'),
        template: _.template(lessonStepTemplate),
        events: {
            'click #validate': 'validateChallenge'
        },
        /*
         * methods
         */
        initialize: function () {
        },
        /*
         * render view
         * @param {type} idCategory
         * @param {type} idLesson
         * @param {type} idStep
         * @returns {undefined}
         */
        render: function (idCategory, idLesson, idStep) {
            // alias
            var self = this;
            // fill some variables
            this.id_category = idCategory;
            this.id_lesson = idLesson;
            this.id_step = idStep;
            LessonDownBarView.setIdCategory(idCategory);
            LessonDownBarView.setIdLesson(idLesson);
            LessonDownBarView.setIdStep(idStep + 1);
            /*
             * get data from cache
             */
            this.model = _.find(StepCollection.models, function (model) {
                return (model.get('lesson').category.idcategory === idCategory && model.get('lesson').idlesson === idLesson && model.get('idstep') === idStep);
            });

            this.solution_model = _.find(SolutionCollection.models, function (model) {
                return (model.get('iduser').iduser === Login.getUserId() && model.get('step').idstep === idStep);
            });

            // if not exits, create one
            if (!this.solution_model) {
                this.solution_model = new SolutionModel({iduser: {iduser: Login.getUserId()}, step: {idstep: idStep}});
                SolutionCollection.add(this.solution_model);
            }

            // setup some variables
            this.func = this.model.get('eval');
            this.regex = this.model.get('expression');

            // if no have a solution
            if (!this.solution_model.get('idsolution')) {
                // fill some variables
                this.code = this.model.get('code');
                this.points = this.model.get('points');
                // add template to DOM
                console.log(this.model.attributes);
                this.$el.html(this.template(this.model.attributes));
                // DOM setup
                this.startup(false);
            } else {
                // have a solution
                this.code = this.solution_model.get('code');
                this.points = this.solution_model.get('points');
                // add template to DOM
                this.$el.html(this.template(
                        _.extend(this.model.attributes, {
                            points: this.points,
                        })));
                // DOM setup
                this.startup(this.solution_model.get('complete'));
            }

            // set the name of challenge
            $('#topmenu2').html(this.model.get('name'));
        },
        /**
         * on close view
         */
        close: function () {
            this.undelegateEvents(); //undelegate events in variable 'events'
        },
        /**
         * setup the DOM
         * @param {boolean} complete
         */
        startup: function (complete) {
            this.setupEditor();
            // set read only the code
            this.editor.setReadOnly(complete);
            // disable validate button
            var validate_button = this.$("#validate");
            validate_button.prop('disabled', complete);
            (complete) ? validate_button.hide() : validate_button.show();
            this.setState(complete);
            $('#next_step').prop('disabled', !complete);
        },
        getState: function (complete) {
            return (complete) ? '<span class="text-success"><b>Completado</b></span>' : '<span class="text-danger"><b>Incompleto</b></span>';
        },
        setState: function (complete) {
            this.$('#state').html(this.getState(complete));
        },
        setupEditor: function () {
            // setup the code editor
            this.editor = ace.edit('editor');
            this.editor.setOptions({
                maxLines: Infinity,
                theme: 'ace/theme/twilight',
                mode: 'ace/mode/java',
            });
            this.editor.resize();
            this.editor.session.setUseWrapMode(true);
            // set the code of challenge
            this.editor.session.setValue(this.code);
        },
        /**
         * validate challenge
         */
        validateChallenge: function () {

            // update code
            this.code = this.editor.getValue();
            console.log(this.solution_model.isNew());

            // soft check
            if (this.editor.getReadOnly()) {
                return;
            }

            var myRegexp = new RegExp(this.regex, 'gi');
            var match = myRegexp.exec(this.editor.getValue());
            // anonymous function
            var real_func = eval('[' + this.func + ']')[0];
            if (real_func && match !== null) {

                var args = [];
                for (var i = 1; i < match.length; i++) {
                    args.push(match[i]);
                }
                if (real_func.apply(this, args) === true) {
                    this.solution_model.set({end_date: new Date().toJSON().slice(0, 10), points: this.points, complete: true, code: this.code});
                    this.solution_model.save();
                    this.startup(true);
                    $('#success_message').modal();
                    return;
                }
            }

            // penitence
            this.points -= 5;
            this.solution_model.set({points: this.points, complete: false, code: this.code});
            this.solution_model.save();

            this.$('#points').html(this.points);
            $('#error_message').modal();
        }
    });
    return LessonStepView;
});
