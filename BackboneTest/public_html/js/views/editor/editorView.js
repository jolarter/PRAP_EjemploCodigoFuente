define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/editor/editorTemplate.html'
], function ($, _, Backbone, editorTemplate) {

    var EditorView = Backbone.View.extend({
        el: $("#content"),
        render: function () {
            var compiledTemplate = _.template(editorTemplate, {});
            $("#content").html(compiledTemplate);
        }

    });

    return EditorView;

});


