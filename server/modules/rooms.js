var sql = require('mysql');

var RoomModel = require('../models/roomsModel');

connect = function() {
  var conn_str = "Driver={SQL Server};Server=tbGameDB;Database=tbGame;Uid=AdminUser;Pwd=testing;";
  var connection = sql.open(conn_str, function (err, conn) {
    if (err) {
      console.log("Error opening the connection!");
      return;
    };
	console.log("Connected to DB!");
    /*TestCases.TCList(DEFAULTCODEBASE, function(tcData) {
      tcList = tcData;
	  console.log("TC List generated!");
    });*/
  });
  conn = connection;
};

returnResults = function(query, func) {
	conn.queryRaw(query, function (err, results) {
        if (err) {
            console.log("Error running query!");
            func([]);
            return;
        }
        if (results['rows'].length < 1) {
            func([]);
            return;
        }
        var a = [];
        for (var i = 0; i < results['rows'].length; i++) {
          var b = {};
          for (var j = 0; j < results['rows'][0].length; j++) {
            if (results['rows'][i][j] != undefined && typeof(results['rows'][i][j]) != "object")
              b[results['meta'][j]['name']] = results['rows'][i][j].toString().trim();
          }
          a.push(b);
        }
        func(a);
    });
}

connect();
//reconnects to gimpy every 24 hours
setInterval(function() {connect();}, 86400000);

exports.getRoom = function(req, res) {
	RoomModel.RoomByName(req.params.roomname, function(data) {
        res.send(data);
    });
}

exports.getRooms = function(req, res) {
	RoomModel.RoomList(function(data) {
        res.send(data);
    });
}
