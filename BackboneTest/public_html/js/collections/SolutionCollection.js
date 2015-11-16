/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define([
    'underscore',
    'backbone',
    'models/SolutionModel'
], function (_, Backbone, SolutionModel) {
    var instance = null;

    var SolutionCollection = Backbone.Collection.extend({
        model: SolutionModel,
        urlRoot: "http://localhost:8080/Logica/webresources/edu.poli.prap.pp.data.solution",
        sync: function (method, model, options) {
            options || (options = {});
            var errorHandler = {
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Unable to fulfil the request');
                }};
            switch (method) {
                case 'read':
                    /*
                     * custom methods
                     */
                    if (options.func && options.func === 'getAll') {
                        options.url = _.result(this, 'urlRoot') + '/getall/' + options.id_user;
                        console.log(_.result(this, 'urlRoot'), options.url);
                    }
                    break;
            }

            return Backbone.sync(method, model, _.extend(options, errorHandler));
        }
    });

    SolutionCollection.getInstance = function () {
        // summary:
        //      Gets an instance of the singleton. It is better to use 
        if (instance === null) {
            instance = new SolutionCollection();
        }
        return instance;
    };

    return SolutionCollection.getInstance();
});