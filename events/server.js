var express = require('express');

var app = express();
var path = require('path');

// viewed at http://localhost:8082

app.get('/', function(req, res) {

	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8082, () => {
	console.log('listening on 8082!');
});
