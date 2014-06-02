/** @file list.js
 *  @fileOverview
 *  @author csbrandt
 *  @date 05/30/2014
 */


define(function(require)
{
   "use strict";
   // dependencies
   var Ember = require('ember');
   var Masonry = require('masonry');

   var view = Ember.View.extend(
   {
      click: function(event)
      {
         var $targetParent = $(event.target).parent();

         if ($targetParent.hasClass('pill'))
         {
            $('.pill').removeClass('active');
            $targetParent.addClass('active');
         }
      },
      didInsertElement: function()
      {
         // Masonry
         new Masonry(document.querySelector('.list-view-list'),
         {
            itemSelector: '.masonry-item',
            //gutter: 10,
            isFitWidth: false
         });

      }
   });

   return view;

});
