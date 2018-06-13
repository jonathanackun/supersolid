module.exports = function (app, express) {
	console.log("test in api file");

	var express = require('express');

	var jsonfile = require('jsonfile');
	
	var file = '/tmp/data.json';
    
    var api = express.Router();

  
	api.post('/api/submitEntry', function(req, res) {
		console.log("test line 18");
	  var entry = {
            name: req.body.name,
            word: req.body.word
        };
    	jsonfile.writeFile(file, entry, function (err) {
  		console.error(err)
		})
		console.log("called on submit");
		return entry;
	});

  //   api.post('/api/submitEntry', function (req, res) {
  //       var entry = {
  //           name: req.body.name,
  //           word: req.body.word
  //       };
  //   	jsonfile.writeFile(file, entry, function (err) {
  // 		console.error(err)
		// })
		// console.log("called on submit");

  //   });

    api.get('/api/getScores', function (req, res) {
        jsonfile.readFile(file, function(err, obj) {
		  console.dir(obj)
		})
		console.log('getScores has been called');
    });

 	// api.get('/', function(req, res) {
	// res.render('index.html');
	// });
}