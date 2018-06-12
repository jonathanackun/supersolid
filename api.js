module.exports = function (app, express) {
	console.log("test in api file");

	var express = require('express');

	var jsonfile = require('jsonfile');
	
	var file = '/tmp/data.json';
    
    var api = express.Router();

    api.get('/', function(req, res) {
	res.render('index.html');
	});

    api.post('/api/submitEntry', function (req, res) {
        var entry = {
            name: req.body.name,
            word: req.body.word
        };
    	jsonfile.writeFile(file, entry, function (err) {
  		console.error(err)
		})
		console.log("called on submit");

    });

    api.get('/api/getScores', function (req, res) {
        return 5;
        console.log("called on get");

    });
}