var express = require('express');

var roomModule = require('./modules/rooms');

start = function(PORT) {
	var app = express();

	app.use(express.logger('dev'));
	app.use(express.bodyParser());

	//Default
	app.use(express.static(__dirname + '/../app'));
	// Room stuff
	app.get('/api/rooms', roomModule.getRoomList);
	app.get('/api/room/:roomname', roomModule.getRoom);
	app.put('/api/room/:roomname', roomModule.putRoom);
	//Commands
	app.get('/api/commands/:roomid', roomModule.getCommands);
	app.put('/api/commands/:roomid', roomModule.putCommands);

	console.log(PORT);
	app.listen(PORT);
	console.log(__dirname + '/../app');

};

start(8080);
