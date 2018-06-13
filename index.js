var express = require('express');

//const path = require('path');

var relativePath = process.cwd();

//var getScores = require('./ng/api/getScores.js');

//var submitEntry = require('./ng/api/submitEntry');
//var express = require('express');

var jsonfile = require('jsonfile');
	
var file = relativePath + '/temp/data.json';

console.log(file);
    
// var api = express.Router();

var app = express();

var bodyParser = require('body-parser');

var isPalindrome = require('is-palindrome');

app.use(bodyParser());

app.use(express.static(__dirname));

//app.use('/api', require('./api'));

console.log("test in api file");

	

  
	app.post('/api/submitEntry', function(req, res) {
		console.log("test line 18");
	  var entry = {
            name: req.body.name,
            word: req.body.word,
            scores: 0
        };    	
		if (isPalindrome(entry.word) === true){
			entry.scores = entry.word.length;
			console.log(entry.scores);
		}
		jsonfile.writeFile(file, entry, {flag: 'a'}, function (err) {
  		console.error(err)
		})
		console.log("called on submit");
	});

  

    app.get('/api/getScores', function (req, res) {
    	var allScores = jsonfile.readFileSync(file);
		console.log(allScores);
		return allScores;
    });

	app.get('/', function(req, res) {
		res.render('index.html');
	});

var port = 3000;
app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});
