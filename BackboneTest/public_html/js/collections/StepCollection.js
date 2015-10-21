/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([
  'underscore',
  'backbone',
  'models/StepModel'
], function(_, Backbone,StepModel) {
    var StepCollection = Backbone.Collection.extend({
        model: StepModel,
        url: "http://localhost:8080/Logica/webresources/edu.poli.prap.pp.data.step/",
        
           //options no esta trayendo nada --------------------------   
           
        sync: function (method, model, options) {
            options || (options = {});
            var errorHandler = {
                error: function (jqXHR, textStatus, errorThrown) {
                    // TODO: put your error handling code here
                    // If you use the JS client from the different domain
                    // (f.e. locally) then Cross-origin resource sharing 
                    // headers has to be set on the REST server side.
                    // Otherwise the JS client has to be copied into the
                    // some (f.e. the same) Web project on the same domain
                    alert('Unable to fulfil the request');
                }}
            if(method == 'getStep'){
                options.url = 'http://localhost:8080/Logica/webresources/edu.poli.prap.pp.data.step/'+options.idCategory+'/'+options.idLesson+'/0';                
            }
            var result = Backbone.sync(method, model, _.extend(options, errorHandler));
            return result;
        }
    });

    return StepCollection;
});