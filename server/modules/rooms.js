var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./db/database.db');

var RoomModel = require('../models/roomsModel');
var CommandModel = require('../models/commandsModel');

returnResults = function(query, inserts, func) {
  if(inserts) {
	//query = mysql.format(query, inserts);
  }
  console.log(query);
  db.all(query, function(err, results) {
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

exports.getCommands = function(req, res) {
	CommandModel.CommandsByRoom(req.params.roomid, function(data) {
        	res.send(data);
	});
}

exports.putCommands = function(req, res) {
	CommandModel.UpdateCommandsByRoom(req.params.roomid, req.body, function(data) {
        	res.send(data);
	});
}
