/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone */

define(['views/main/mainView'], function (MainView) {
    return function () {
        var view = new MainView();
        view.render();

        /*
         * methods
         */
        this.destroy = function () {
            view.close();
            view = null;
            console.log('recycled login');
        };

        return this;
    };
});
