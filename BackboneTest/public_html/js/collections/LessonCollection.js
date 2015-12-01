/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
  'underscore',
  'backbone',
  'models/LessonModel'
], function(_, Backbone,LessonModel) {
    var LessonCollection = Backbone.Collection.extend({
        model: LessonModel,
        url: "http://localhost:8080/Logica/webresources/edu.poli.prap.pp.data.lesson/",
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
                        options.url = _.result(this, 'urlRoot') + '/getall/' + options.id_category;
                        console.log(_.result(this, 'urlRoot'), options.url);
                    }
                    break;
            }

            return Backbone.sync(method, model, _.extend(options, errorHandler));
        }
    });

    return LessonCollection;
});