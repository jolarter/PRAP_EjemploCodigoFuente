/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

define(function () {
    var instance = null;

    var Login = function () {

        var cookie_name = 'pp_jhon';

        var decodeCookie = function () {
            console.log($.cookie(cookie_name));
            if ($.cookie(cookie_name)) {
                return JSON.parse($.cookie(cookie_name));
            }
        }

        this.newLogin = function (data) {
            $.cookie(cookie_name, JSON.stringify(data), {expires: 7, path: '/'});
        };

        this.isLogged = function () {
            var self = this;
            var token = this.getToken();
            var logged = false;
            console.log(token, 'token');
            if (token) {
                $.ajax({
                    url: "http://localhost:8080/Logica/webresources/edu.poli.prap.pp.data.login/checktoken/" + token,
                    async: false,
                }).done(function (response) {
                    if (response === 'true') {
                        logged = true;
                    } else {
                        self.logout();
                    }
                });
            }

            return logged;
        };

        this.logout = function () {
            //$.cookie(cookie_name, '', {path: '/'});
        };

        this.getUserId = function () {
            if (decodeCookie()) {
                return parseInt(decodeCookie().userid);
            }
        };

        this.getUsername = function () {
            if (decodeCookie()) {
                return decodeCookie().username;
            }
        };

        this.getToken = function () {
            if (decodeCookie()) {
                return decodeCookie().token;
            }
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
