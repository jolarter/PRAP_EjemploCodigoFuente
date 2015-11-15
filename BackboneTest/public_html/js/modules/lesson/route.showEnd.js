/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

define(['views/lesson/lessonEndView'], function (LessonEndView) {
    return function (idCategory, idLesson) {
        idCategory = idCategory || 0;
        idLesson = idLesson || 0;
        var view = new LessonEndView();
        view.render(idCategory, idLesson);
        console.log('entro a esta ruta route:ShowEnd');
    };
});
