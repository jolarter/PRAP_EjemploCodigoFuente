/* global Backbone, _ */

/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

define([
    'text!templates/lesson/lessonStepTemplate.html',
], function (lessonStepTemplate) {

    var LessonStepView = Backbone.View.extend({
        /*
         * variables
         */
        code: '',
        regex: '',
        func: '',
        editor: '',
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

            // get data from server
            this.model.fetch({
                success: function (model, response) {
                    // fill some variables
                    self.code = response.code;
                    self.func = response.eval;
                    self.regex = response.expression;

                    // add template to DOM
                    self.$el.html(self.template(response));

                    // setup the code editor
                    self.editor = ace.edit('editor');
                    self.editor.setOptions({
                        maxLines: Infinity,
                        theme: 'ace/theme/twilight',
                        mode: 'ace/mode/java'
                    });
                    // set the code of challenge
                    self.editor.session.setValue(response.code);
                    // set the name of challenge
                    $('#topmenu2').html(response.name);
                }
            });
        },
        /**
         * validate challenge
         * @returns {undefined}
         */
        validateChallenge: function () {
            var myRegexp = new RegExp(this.regex, 'gi');
            var match = myRegexp.exec(this.editor.getValue());

            // anonymous function
            var real_func = eval('[' + this.func + ']')[0];

            if (match !== null) {

                var args = [];

                for (var i = 1; i < match.length; i++) {
                    args.push(match[i]);
                }
                if (real_func.apply(this, args) === true) {
                    alert('Pasaste el reto!');
                    return;
                }
            }

            alert('Muy mal, sigue intentando!');
        }
    });

    return LessonStepView;
});
