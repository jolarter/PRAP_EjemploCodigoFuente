/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

define(['views/main/mainRegisterView'], function (MainRegisterView) {
    return function () {
        var view = new MainRegisterView();
        view.render();

        /*
         * methods
         */
        this.destroy = function () {
            view.close();
            view = null;
            console.log('recycled register');
        };

        return this;
    };
});
