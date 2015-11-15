/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone */

define(['views/lesson/lessonIntroView'], function (LessonIntroView) {
    return function (idCategory, idLesson) {
        idCategory = idCategory || 0;
        idLesson = idLesson || 0;
        var view = new LessonIntroView();
        view.render(idCategory, idLesson);
    };
});
