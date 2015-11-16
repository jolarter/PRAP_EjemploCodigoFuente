/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

define([
    'models/StepModel',
    'views/lesson/lessonStepView'
], function (StepModel, LessonStepView) {
    return function (idCategory, idLesson, idStep) {
        idCategory = parseInt(idCategory || 0);
        idLesson = parseInt(idLesson || 0);
        idStep = parseInt(idStep || 0);
        // create new view (pass a model required)
        var view = new LessonStepView();
        // render now
        view.render(idCategory, idLesson, idStep);

        /*
         * methods
         */
        this.destroy = function () {
            view.close();
            view = null;
            console.log('recycled step');
        };

        return this;
    };
});
