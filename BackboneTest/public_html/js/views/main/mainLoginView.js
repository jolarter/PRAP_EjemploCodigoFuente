/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone, _, router, Utils, CryptoJS */

define([
    'app/login/login',
    'text!templates/main/mainLoginTemplate.html'
], function (Login, mainLoginTemplate) {
    var LessonLoginView = Backbone.View.extend({
        /*
         * configuration of view
         */
        el: $('#modal_container'),
        template: _.template(mainLoginTemplate),
        events: {
            'click #login_button': 'loginBtn'
        },
        /*
         * methods
         */
        /**
         * render view
         * @returns {undefined}
         */
        render: function () {
            // show login
            this.$el.html(this.template());
            $('#login_message').modal();

            $('#login_message').on('hidden.bs.modal', function (e) {
                router.navigate('', {trigger: true, replace: true});
            });
        },
        /**
         * on close view
         */
        close: function () {
            this.undelegateEvents(); //undelegate events in variable 'events'
        },
        loginBtn: function () {

            var mail = $('#mail_input').val();
            var pwd = $('#pwd_input');
            var hash = CryptoJS.SHA1(mail + pwd.val()).toString(CryptoJS.enc.Hex);
            pwd.val('');

            if (!Utils.isValidEmailAddress(mail)) {
                return false;
            }

            $.ajax({
                url: "http://localhost:8080/Logica/webresources/edu.poli.prap.pp.data.login/" + mail + '/' + hash,
            }).done(function (response) {
                if (response.token) {
                    Login.newLogin(response);
                    $('#login_message').modal('hide');
                }
            });

            return false;
        }
    });

    return LessonLoginView;
});