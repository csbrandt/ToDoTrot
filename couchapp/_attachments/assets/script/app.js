/** @file app.js
 *  @fileOverview App initialization.
 *  @author csbrandt
 *  @date 05/30/2014
 */


/* global DS */
define(function(require)
{
   "use strict";
   // dependencies
   var Ember = require('ember');
   require('ember-data');
   require('ember-ls-adapter');

   var App = Ember.Application.create();

   App.ApplicationSerializer = DS.LSSerializer.extend();
   App.ApplicationAdapter = DS.LSAdapter.extend();

   App.Router.map(function()
   {
      this.resource('todos',
      {
         path: '/'
      }, function()
      {
         this.route('active');
         this.route('complete');

      });

      this.route('settings');

   });

   return App;

});
