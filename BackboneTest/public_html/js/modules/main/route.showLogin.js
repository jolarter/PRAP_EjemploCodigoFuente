/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

define(['views/main/mainLoginView'], function (MainLoginView) {
    return function () {
        var view = new MainLoginView();
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
