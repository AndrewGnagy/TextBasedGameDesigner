app.controller('RoomDetailsCtrl', function ($scope, $routeParams, Rooms) {
	console.log($routeParams);
	if ($routeParams.roomname) {
		if($routeParams.roomname === 'new'){
			$scope.isNew = true;
			$scope.roomname = "New Room"
		} else {
			$scope.isNew = false;
			$scope.roomname = $routeParams.roomname;
		}
	}

	Rooms.Room.get({roomname: $scope.roomname},
		function(response){
			$scope.room = response[0];
	});

	$scope.saveDetails = function() {
		if($scope.isNew){
			Rooms.RoomPost.save({roomname: $scope.roomname}, $scope.room);
		} else {
			Rooms.RoomPut.update({roomname: $scope.roomname}, $scope.room);
		}
	}

	/*$scope.room = {
		name: "RoomA",
		description: "This is a room, kinda neat, huh?"
	};*/
});
