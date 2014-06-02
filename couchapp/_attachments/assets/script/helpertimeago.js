/** @file helpertimeago.js
 *  @fileOverview
 *  @author cs_brandt
 *  @date 05/30/2014
 */

define(function(require)
{
   "use strict";
   var Ember = require('ember');

   Ember.Handlebars.helper("timeago", function(date)
   {
      return $.timeago(date);
   });

});
