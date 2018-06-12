var express = require('express');

//var getScores = require('./ng/api/getScores.js');

//var submitEntry = require('./ng/api/submitEntry');


var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser());

app.use(express.static(__dirname));

app.use('/api', require('./api'));

// app.get('/', function(req, res) {
// 	res.render('index.html');
// });

var port = 3000;
app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});
