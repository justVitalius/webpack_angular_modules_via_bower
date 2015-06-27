(function(){
  'use strict';  

  var angular = require('angular');
  require('ngDialog');
  var ngModule =  angular.module('app', ['ngDialog']);

  console.log(ngModule);

  ngModule.controller('AppController', AppController);

  AppController.$inject = ['ngDialog'];

  function AppController(ngDialog){
    ngDialog.open();
    console.log('hello');
  }
})();
