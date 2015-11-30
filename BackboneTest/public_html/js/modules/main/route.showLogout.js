/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global router */

define(['app/login/login'], function (Login) {
    return function () {
        Login.logout();
        router.navigate('', {trigger: true, replace: true});
        return this;
    };
});
