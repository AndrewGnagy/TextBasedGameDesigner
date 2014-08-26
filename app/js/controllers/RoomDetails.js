app.controller('RoomDetailsCtrl', function ($scope, $routeParams, Rooms) {
	console.log($routeParams);
	if ($routeParams.roomname) {
		$scope.roomname = $routeParams.roomname;
	}


	Rooms.Room.get({roomname: $scope.roomname},
		function(response){
			$scope.room = response[0];
	});

	$scope.saveDetails = function() {
		Rooms.RoomPut.update({roomname: $scope.roomname}, $scope.room);
	}

	/*$scope.room = {
		name: "RoomA",
		description: "This is a room, kinda neat, huh?"
	};*/
});
