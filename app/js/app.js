'use strict';

var app = angular.module('tbGameApp', ['ngResource', 'ui.bootstrap']);

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
        controller: 'RoomDetailsCtrl',
        templateUrl: 'views/roomDetails.html'
    }).
    otherwise({
        redirectTo: '/rooms'
    });
});
