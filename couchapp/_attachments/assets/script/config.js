/** @file config.js
 *  @fileOverview Program driver. Configures path aliases and calls app.initialize()
 *  @author csbrandt
 *  @date 05/29/2014
 */


require.config(
{
   paths:
   {
      'ember': '../bower_components/ember/ember',
      'ember-data': '../bower_components/ember-data/ember-data',
      'ember-ls-adapter': '../bower_components/ember-localstorage-adapter/localstorage_adapter',
      'handlebars': '../bower_components/handlebars/handlebars',
      'text': '../bower_components/requirejs-text/text',
      'jquery': '../bower_components/jquery/dist/jquery.min',
      'ink': '../bower_components/Ink/dist/js/ink.min',
      'timeago': '../bower_components/jquery-timeago/jquery.timeago',
      'ehbs': '../bower_components/require-ember-handlebars-plugin/ehbs',
      'masonry': '../bower_components/masonry/dist/masonry.pkgd'
   },
   shim:
   {
      'ember':
      {
         exports: 'Ember',
         deps: ['jquery', 'handlebars', 'timeago']
      },
      'timeago':
      {
         deps: ['jquery']
      },
      'ember-data':
      {
         deps: ['ember']
      },
      'ember-ls-adapter':
      {
         deps: ['ember', 'ember-data']
      },
      'masonry':
      {
         deps: ['jquery']
      }

   },
   ehbs:
   {
      paths:
      {
         templates: "../template",
         views: "view",
         controllers: "controller",
         helpers: "helper"
      },
      casing: 'camel'
   }

});

require(['app', 'router'], function(app) {


});
