'use strict';

app.factory('Commands', ['$resource', 
	function ($resource) {
		return {
			CmdList: $resource('api/commands/:roomid',
				{ roomid: '@roomid'},
				{ get: { method: 'GET', isArray : true }}),
			CmdPut: $resource('api/commands/:roomid',
				{ roomid: '@roomid'},
				{ update: { method: 'PUT' }}),
			CmdPost: $resource('api/commands/:roomid',
				{ roomid: '@roomid'},
				{ save: { method: 'POST' }})
		}
	}
]);
