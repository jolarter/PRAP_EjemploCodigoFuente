define(['views/lesson/lessonEndView'], function (LessonEndView) {
    return function (app_router, idCategory, idLesson) {
        idCategory = idCategory || 0;
        idLesson = idLesson || 0;
        var view = new LessonEndView();
        view.render(idCategory, idLesson);
        console.log('entro a esta ruta route:ShowEnd');
    };
});
