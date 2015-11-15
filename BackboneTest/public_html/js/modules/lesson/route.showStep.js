/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

define([
    'models/StepModel',
    'views/lesson/lessonStepView'
], function (StepModel, LessonStepView) {
    return function (idCategory, idLesson, idStep) {
        idCategory = idCategory || 0;
        idLesson = idLesson || 0;
        idStep = idStep || 0;
        // create new view (pass a model required)
        var view = new LessonStepView({model: new StepModel({idstep: idStep})});
        // render now
        view.render(idCategory, idLesson, idStep);

        /*
         * methods
         */
        this.destroy = function () {
            view.close();
            console.log('recycled step');
        };

        return this;
    };
});
