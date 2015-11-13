/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

define([
    'models/StepModel',
    'views/lesson/lessonStepView'
], function (StepModel, LessonStepView) {
    return function (app_router, idCategory, idLesson, idStep) {
        idCategory = idCategory || 0;
        idLesson = idLesson || 0;
        idStep = idStep || 0;

        // create new view (pass a model required)
        var view = new LessonStepView({model: new StepModel({idstep: idStep})});
        // render now
        view.render(idCategory, idLesson, idStep);
    };
});
