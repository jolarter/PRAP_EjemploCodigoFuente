/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

define(function () {
    var instance = null;

    var Login = function () {

        var cookie_name = 'logintest';

        this.newLogin = function () {
            $.cookie(cookie_name, '1');
        };

        this.isLogged = function () {
            return $.cookie('logintest');
        };

        this.getUserId = function () {
            return parseInt($.cookie('logintest'));
        };

        this.getUsername = function () {
            return 'Jhon';
        };

    };

    Login.getInstance = function () {
        // summary:
        //      Gets an instance of the singleton. It is better to use 
        if (instance === null) {
            instance = new Login();
        }
        return instance;
    };

    return Login.getInstance();
});
