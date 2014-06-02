/** @file router.js
 *  @fileOverview App initialization.
 *  @author csbrandt
 *  @date 05/30/2014
 */


define(function(require)
{
   "use strict";
   // dependencies
   var Ember = require('ember');
   var App = require('app');
   var todoCollection = require('controller/todoCollection');
   var todoController = require('controller/todoController');
   var listView = require('view/list');
   App.Todo = require('model/todo');
   // templates
   require('ehbs!todos');
   require('ehbs!settings');

   App.TodosView = listView;
   App.TodoController = todoController;
   App.TodosController = todoCollection;

   App.TodosRoute = Ember.Route.extend(
   {
      model: function()
      {
         return this.store.find('todo');
      }

   });

   // format [Resource][Route]Route
   App.TodosIndexRoute = Ember.Route.extend(
   {
      setupController: function(controller)
      {
         var todos = this.controllerFor('todos').get('model');

         var ap = Ember.ArrayController.create(
         {
            sortProperties: ['addedDate'],
            sortAscending: false,
            content: Ember.A(todos)
         });

         this.controllerFor('todos').set('todos', ap.get('arrangedContent'));
      }
   });

   App.TodosActiveRoute = Ember.Route.extend(
   {
      setupController: function(controller)
      {
         // sorting / filtering should be easier than this
         var todos = this.controllerFor('todos').get('model');

         var filteredTodos = todos.filter(function(todo)
         {
            return !todo.get('complete');
         });

         var ap = Ember.ArrayController.create(
         {
            sortProperties: ['addedDate'],
            sortAscending: false,
            content: Ember.A(filteredTodos)
         });

         this.controllerFor('todos').set('todos', ap.get('arrangedContent'));
      }
   });

   App.TodosCompleteRoute = Ember.Route.extend(
   {
      setupController: function(controller)
      {
         // sorting / filtering should be easier than this
         var todos = this.controllerFor('todos').get('model');

         var filteredTodos = todos.filter(function(todo)
         {
            return todo.get('complete');
         });

         var ap = Ember.ArrayController.create(
         {
            sortProperties: ['addedDate'],
            sortAscending: false,
            content: Ember.A(filteredTodos)
         });

         this.controllerFor('todos').set('todos', ap.get('arrangedContent'));
      }
   });

   App.SettingsRoute = Ember.Route.extend(
   {
      setupController: function() {


      }
   });

});
