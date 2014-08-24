var express = require('express');

var roomModule = require('./modules/rooms');

start = function(PORT) {
	var app = express();

	app.use(express.logger('dev'));
	app.use(express.bodyParser());

	//Default
	app.get('/', function(req, res){
		res.send('You are accessing tbgd api');
	});
	// Room stuff
	app.get('/api/rooms', roomModule.getRoomList);
	app.get('/api/room/:roomname', roomModule.getRoom);

	console.log(PORT);
	app.listen(PORT);

};

start(8080);
