app.controller('RoomListCtrl', function ($scope, Rooms) {
	Rooms.RoomList.get(function(response){
		$scope.rooms = response;
	});
/*	$scope.rooms = [
		{'name': 'RoomA', 'description': 'blah blah'},
		{'name': 'RoomB', 'description': 'RoomB'},
		{'name': 'RoomX', 'description': 'WOW!'},
	];
*/
});
