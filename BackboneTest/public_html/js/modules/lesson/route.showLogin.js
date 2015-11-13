/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

define(['views/lesson/lessonLoginView'], function (lessonLoginView) {
    return function (app_router) {
        var view = new lessonLoginView();
        view.render();
    };
});
