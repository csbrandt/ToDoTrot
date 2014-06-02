/** @file todoController.js
 *  @fileOverview
 *  @author csbrandt
 *  @date 05/30/2014
 */


define(function(require)
{
   "use strict";
   // dependencies
   var Ember = require('ember');

   var controller = Ember.ObjectController.extend(
   {
      actions:
      {
         completeTodo: function(todo)
         {
            todo.set('complete', true);
            todo.save();
         }
      }
   });

   return controller;

});
