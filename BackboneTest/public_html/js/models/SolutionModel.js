/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    var SolutionModel = Backbone.Model.extend({
        urlRoot: "http://localhost:8080/Logica/webresources/edu.poli.prap.pp.data.solution",
        is_new: true,
        idAttribute: 'idsolution',
        defaults: {
            idsolution: null,
            start_date: null,
            end_date: null,
            trials: 0,
            points: 0,
            complete: false,
            code: '',
            step: {idstep: 0},
            iduser: {iduser: 0}
        },
        isNew: function () {
            /*default isNew() method imlementation is
             based on the 'id' initialization which
             sometimes is required to be initialized.
             So isNew() is rediefined here
             */
            return this.is_new && !this.has(this.idAttribute);
        },
        sync: function (method, model, options) {
            options || (options = {});
            var error_handler = {
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Unable to fulfil the request');
                }};
            switch (method) {
                case 'create':
                    options.url = _.result(this, 'urlRoot');
                    console.log(_.result(this, 'urlRoot'), options.url);
                    break;
                case 'read':
                    /*
                     * custom methods
                     */
                    if (options.func && options.func === 'searchFromStepAndUser') {
                        options.url = _.result(this, 'urlRoot') + '/solution/' + options.id_step + '/' + options.id_user;
                        console.log(_.result(this, 'urlRoot'), options.url);
                    }
                    break;
            }

            var ret = Backbone.sync(method, model, _.extend(options, error_handler));
            // set to old
            this.is_new = false;
        }
    });

    return SolutionModel;

});
