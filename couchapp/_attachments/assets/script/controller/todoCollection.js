/** @file todoCollection.js
 *  @fileOverview
 *  @author csbrandt
 *  @date 05/30/2014
 */


define(function(require)
{
   "use strict";
   // dependencies
   var Ember = require('ember');

   var collection = Ember.ArrayController.extend(
   {
      actions:
      {
         create: function()
         {
            // get input text
            var todoText = this.get('todoText').trim();

            if (todoText.length)
            {
               var todo = this.store.createRecord('todo',
               {
                  content: todoText,
                  addedDate: Date.now(),
                  complete: false
               });

               // persist model
               todo.save();

               // clear input
               this.set('todoText', '');
            }

         }
      },

      // computed properties for collection
      completed: Ember.computed.filterBy('content', 'complete', true),
      active: Ember.computed.filterBy('content', 'complete', false)

   });

   return collection;

});
