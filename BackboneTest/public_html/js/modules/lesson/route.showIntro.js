/* global common_libs, Backbone */

define(['views/lesson/lessonIntroView'], function (LessonIntroView) {
    return function (app_router, idCategory, idLesson) {
        idCategory = idCategory || 0;
        idLesson = idLesson || 0;
        var view = new LessonIntroView();
        view.render(idCategory, idLesson);
    };
});
