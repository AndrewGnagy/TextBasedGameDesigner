'use strict';

app.factory('Rooms', ['$resource', 
	function ($resource) {
		return {
			Room: $resource('api/rooms', {}, { get: { method: 'GET', isArray : true }}),
			RoomList: $resource('api/room/:roomname', 
				{roomname: '@roomname', 
				}, { get: { method: 'GET', isArray : true }}),
		}
	}
]);