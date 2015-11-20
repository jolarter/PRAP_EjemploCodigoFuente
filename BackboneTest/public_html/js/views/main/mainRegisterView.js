/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone, _, router, Utils, CryptoJS */

define([
    'app/login/login',
    'text!templates/main/mainRegisterTemplate.html'
], function (Login, mainLoginTemplate) {
    var LessonLoginView = Backbone.View.extend({
        /*
         * configuration of view
         */
        el: $('#modal_container'),
        template: _.template(mainLoginTemplate),
        events: {
            'click #register_button': 'registerBtn'
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
            $('#register_message').modal();

            $('#register_message').on('hidden.bs.modal', function () {
                router.navigate('', {trigger: true, replace: true});
            });
        },
        /**
         * on close view
         */
        close: function () {
            this.undelegateEvents(); //undelegate events in variable 'events'
        },
        registerBtn: function () {

            var self = this;
            var name = $('#name_input').val();
            var mail = $('#mail_input').val();
            var pwd = $('#pwd_input');
            var pwd2 = $('#pwd2_input');

            if (mail === '' || pwd.val() === '' || pwd2.val() === '' || pwd.val() !== pwd2.val() || !Utils.isValidEmailAddress(mail)) {
                pwd.val('');
                pwd2.val('');
                this.emitErrorAlert();
                return;
            }


            var hash = CryptoJS.SHA1(mail + pwd.val()).toString(CryptoJS.enc.Hex);
            pwd.val('');
            pwd2.val('');

            var user = {
                name: name,
                mail: mail,
                password: hash
            };

            $.ajax({
                method: 'POST',
                url: 'http://localhost:8080/Logica/webresources/edu.poli.prap.pp.data.register/',
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify(user)
            }).done(function (response) {
                if (response === true) {
                    self.emitSuccessAlert();
                    $('#register_message').modal('hide');
                }
            });

            return false;
        },
        emitErrorAlert: function () {
            $('#alert_message').append($('#error_alert').html());
        },
        emitSuccessAlert: function () {
            $('#success_modal').modal();
        }
    });

    return LessonLoginView;
});