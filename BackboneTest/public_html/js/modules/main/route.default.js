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
            if (view !== null) {
                view.close();
                view = null;
            }
            console.log('recycled login');
        };

        return this;
    };
});
