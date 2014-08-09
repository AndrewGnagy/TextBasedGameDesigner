TCList = function(func) {
    console.log('Looking for RoomList);

    var query = ["Select *",
		"FROM",
		"Table"].join(" ");

    returnResults(query, function(results) {
		func(results);
    });
};

exports.RoomList = RoomList;