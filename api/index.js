var express = require('express'),
	router = express.Router(),
	fs = require('fs');

router.get('/', function(req,res,next){
	fs.readFile(__dirname + '/../data/people.json', function(err, buffer){
		if(err) throw err;
		res.status(200).send(buffer.toString());
	});
});

module.exports = router;