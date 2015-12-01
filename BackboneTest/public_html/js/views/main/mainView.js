/**
 * @author Jhon Eslava <jhonjairoeslavaurrego@gmail.com>
 */

/* global common_libs, Backbone, _, router, CryptoJS, Utils */

define([
    'app/login/login',
    'text!templates/main/mainCategoryTemplate.html',
    'collections/CategoryCollection',
    'collections/LessonCollection',
    'models/CategoryModel',
    'models/LessonModel',
], function (Login, mainCategoryTemplate, CategoryCollection, LessonCollection, CategoryModel, LessonModel) {
    var MainView = Backbone.View.extend({
        /*
         * configuration of view
         */
        el: $('body'),
        events: {
        },
        /*
         * methods
         */
        /**z
         * render view
         * @returns {undefined}
         */
        render: function () {
            var self = this;

            this.menuShow(Login.isLogged());
            this.syncModels(function () {
                var template = _.template(mainCategoryTemplate);
                var compiledTemplate = template(
                        {
                            categories: self.category_collection,
                            lessons: self.lesson_collection
                        }
                );
                this.$('#categories').html(compiledTemplate);

            });
        },
        menuShow: function (logged) {
            (logged) ? $('#login_li').hide() : $('#login_li').show();
            (logged) ? $('#register_li').hide() : $('#register_li').show();
            (logged) ? $('#user_li').show() : $('#user_li').hide();
            (logged) ? $('#logout_li').show() : $('#logout_li').hide();
            if (logged) {
                $('#user_li').children().children().html(Login.getUsername());
            }
        },
        /**
         * on close view
         */
        close: function () {
            this.undelegateEvents(); //undelegate events in variable 'events'
        },
        syncModels: function (callback) {
            var self = this;
            this.category_collection = new CategoryCollection();
            this.category_collection.fetch({success: function () {


                    var id_category = 1;


                    _.each(self.category_collection.models, function (model) {

                        console.log(model.get('idcategory'), "dgsdgsd");

                        self.lesson_collection = new LessonCollection({idcategory: model.get('idcategory')});
                        self.lesson_collection.fetch({success: function () {
                                console.log(self.lesson_collection);
                                callback();
                            }});

                    });

                }});

        },
    });

    return MainView;
});