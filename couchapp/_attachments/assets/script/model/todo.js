/** @file todo.js
 *  @fileOverview
 *  @author csbrandt
 *  @date 05/29/2014
 */


define(function(require)
{
   "use strict";
   // dependencies
   var app = require('app');
   require('ember-data');

   var todo = DS.Model.extend(
   {
      content: DS.attr('string'),
      complete: DS.attr('boolean'),
      addedDate: DS.attr('number'),
      completedDate: DS.attr('number')
   });

   return todo;

});
