var express = require('express');
var app = express();

app.get('/', function(req,res,next){
	res.send('Hello World');
});

var server = app.listen(3000, function(){

	console.log('server started');
});