var express = require('express');
var moment = require('moment');
var app = express();


// a middleware with no mount path; gets executed for every request to app
app.use(function(req, res, next){
	console.log('Time:', moment().format('MMMM Do YYYY, h:mm:ss a'));
	next();
});

app.get('/', function(req,res){
	res.send('Hello World');
});

var server = app.listen(3000, function(){

	console.log('server started');
});