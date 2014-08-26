'use strict';

app.factory('Rooms', ['$resource', 
	function ($resource) {
		return {
			RoomList: $resource('api/rooms',
				{},
				{ get: { method: 'GET', isArray : true }}),
			Room: $resource('api/room/:roomname', 
				{ roomname: '@roomname'}, 
				{ get: { method: 'GET', isArray : true }}),
			RoomPut: $resource('api/room/:roomname',
				{ roomname: '@roomname'},
				{ update: { method: 'PUT' }}),
			RoomPost: $resource('api/room/:roomname',
				{ roomname: '@roomname'},
				{ save: { method: 'POST' }})
		}
	}
]);
