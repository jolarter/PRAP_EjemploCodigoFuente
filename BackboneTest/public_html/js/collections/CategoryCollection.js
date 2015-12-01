/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
  'underscore',
  'backbone',
  'models/CategoryModel'
], function(_, Backbone, CategoryModel) {
    var CategoryCollection = Backbone.Collection.extend({
        model: CategoryModel,
        url: "http://localhost:8080/Logica/webresources/edu.poli.prap.pp.data.category/",
        sync: function (method, model, options) {
            options || (options = {});
            var errorHandler = {
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Unable to fulfil the request');
                }};
            switch (method) {
                case 'read':
                    
                    break;
            }

            return Backbone.sync(method, model, _.extend(options, errorHandler));
        }
    });
    return CategoryCollection;
});
