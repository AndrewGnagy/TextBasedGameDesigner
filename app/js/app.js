'use strict';

var app = angular.module('tbGameApp', ['ui.bootstrap']);

app.config(function($routeProvider) {

$routeProvider.
    when('/', {
      controller: 'RoomListCtrl',
      templateUrl: 'views/rooms.html'  
    }).
    when('/rooms', {
      controller: 'RoomListCtrl',
      templateUrl: 'views/rooms.html'
    }).
    when('/room/:roomname', {
      controller: 'RoomListCtrl',
      templateUrl: 'views/roomDetails.html'
    })
});