var escapeSpecialChars = function(text) {
    return text.replace(/\\n/g, "\\n")
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\\f/g, "\\f");
};

RoomList = function(func) {
    console.log('Looking for RoomList');

    var query = "Select name FROM rooms";

    returnResults(query, undefined, function(results) {
	func(results);
    });
};

RoomByName = function(id, func) {
    console.log('Looking for RoomList');

    var query = "Select * FROM rooms WHERE name = ?";
    var inserts = [id];
    returnResults(query, inserts, function(results) {
	func(results);
    });
};

UpdateRoomByName = function(id, data, func) {
    console.log(data);

    var query = ["UPDATE rooms SET name = ?,",
		"text = ?,",
		"isStart = ?",
		"WHERE name = ?"].join(" ");
    var inserts = [data.name, data.text, data.isStart, id];
    returnResults(query, inserts, function(results) {
	func(results);
    });
};

exports.RoomList = RoomList;
exports.RoomByName = RoomByName;
exports.UpdateRoomByName = UpdateRoomByName;
