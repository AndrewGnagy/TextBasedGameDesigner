app.controller('RoomDetailsCtrl', function ($scope, $routeParams, Rooms, Commands) {
	console.log($routeParams);
	if ($routeParams.roomname) {
		$scope.roomname = $routeParams.roomname;
	}


	Rooms.Room.get({roomname: $scope.roomname},
		function(response){
			$scope.room = response[0];
			Commands.CmdList.get({roomid: $scope.room.roomid},
				function(responz){
					$scope.commands = responz;
			});
	});

	$scope.saveDetails = function() {
		Rooms.RoomPut.update({roomname: $scope.roomname}, $scope.room);
	};

/*	$scope.commands = [
		{command: "fight", action: 1, value: 3},
		{command: "go left", action: 2, value: 3}];
*/
	$scope.actions = [
		{name: "Goto room"},
		{name: "Add to Inventory"},
		{name: "Remove from Inventory"},
		{name: "Set variable"}];

	$scope.myAction = $scope.actions[0].name;
	
	$scope.addCommand = function(){
		$scope.commands.push({command: "",
			action: $scope.actions.indexOf($scope.myAction),
			value: ""});
	};
});
