var express = require('express');

var roomModule = require('./modules/rooms');

exports.start = function(PORT, STATIC_DIR) {
	var app = express();

	app.use(express.logger('dev'));
	app.use(express.static(STATIC_DIR));
	app.use(express.bodyParser());

	// Room stuff
	app.get('/api/rooms', roomModule.getRoomList);
	app.get('/api/room/:roomname', roomModule.getRoom);

	app.listen(PORT, function() {
		//open('http://localhost:' + PORT + '/');
	});

	try {
		process.on('SIGINT', function() {
			// save the storage back to the json file
			fs.writeFile(DATA_FILE, JSON.stringify(storage.getAll()), function() {
				process.exit(0);
			});
		});
	} catch (e) {}

};
