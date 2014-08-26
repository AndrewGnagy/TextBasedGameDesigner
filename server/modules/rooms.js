var mysql = require('mysql');

var RoomModel = require('../models/roomsModel');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tesla",
  database: "tbgamedesigner"
});

returnResults = function(query, inserts, func) {
  if(inserts) {
	query = mysql.format(query, inserts);
  }
  console.log(query);
  connection.query(query, function(err, results) {
        if (err) {
            console.log("Error running query!");
            func([]);
            return;
        }
        if (results.length < 1) {
            func([]);
            return;
        }
	console.log(results);
        func(results);
    });
}

connection.connect();
//reconnects to gimpy every 24 hours
setInterval(function() {connect();}, 86400000);

exports.getRoom = function(req, res) {
	RoomModel.RoomByName(req.params.roomname, function(data) {
        	res.send(data);
	});
}

exports.putRoom = function(req, res) {
	RoomModel.UpdateRoomByName(req.params.roomname, req.body, function(data) {
        	res.send(data);
	});
}

exports.getRoomList = function(req, res) {
	RoomModel.RoomList(function(data, req) {
        	res.send(data);
    	});
}
