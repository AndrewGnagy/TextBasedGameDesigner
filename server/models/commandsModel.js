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

CommandsByRoom = function(id, func) {
    console.log('Looking for RoomList');

    var query = "Select * FROM commands WHERE roomid = ?";
    var inserts = [id];
    returnResults(query, inserts, function(results) {
	func(results);
    });
};

UpdateCommandsByRoom = function(id, data, func) {
    console.log(data);

    var query = "";
    var query = [];
    data.forEach(function (cmd) {
	if(cmd.commandid) {
	        query += ["UPDATE commands SET command = ?,",
     		    "action = ?,",
	            "value = ?",
		    "WHERE commandid = ?;"].join(" ");
	        inserts.concat([cmd.command, cmd.action, cmd.value, cmd.commandid]);
	} else {
	        query += ["INSERT INTO commands SET command = ?,",
     		    "action = ?,",
	            "value = ?",
		    "roomid = ?"].join(" ");
	        inserts.concat([cmd.command, cmd.action, cmd.value, id]);
	}
    });
    returnResults(query, inserts, function(results) {
	func(results);
    });
};

exports.CommandsByRoom = CommandsByRoom;
exports.UpdateCommandsByRoom = UpdateCommandsByRoom;
