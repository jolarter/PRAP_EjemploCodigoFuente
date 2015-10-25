/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

define(['views/lesson/lessonStepView'], function (LessonStepView) {
    return function (app_router, idCategory, idLesson, idStep) {
        idCategory = idCategory || 0;
        idLesson = idLesson || 0;
        idStep = idStep || 0;
        var view = new LessonStepView();
        view.render(idCategory, idLesson, idStep);

        console.log('entro a esta ruta route:Showstep');
    };
});
