/* global common_libs, Backbone */

define([
    'collections/StepCollection'
], function (StepCollection) {
    window.idStep = new StepCollection();
    var LessonDownBarView = Backbone.View.extend({
        idLesson: '',
        idCategory: '',
        idStep: '',
        arr: null,
        // arr:stepcollec,




        el: $("#barrainferior"),
        render: function (idCategory, idLesson) {

        },
        events: {
            "click #btnnext": "next"

        },
        next: function (evt) {
            location.href = "#" + this.idCategory + "/" + this.idLesson + "/" + this.idStep;
        }
    });
    return LessonDownBarView;
});
