TCList = function(func) {
    console.log('Looking for RoomList);

    var query = ["Select name",
		"FROM",
		"rooms"].join(" ");

    returnResults(query, function(results) {
		func(results);
    });
};

exports.RoomList = RoomList;