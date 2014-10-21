var express = require('express'),
	moment = require('moment'),
	chalk = require('chalk'),
	api = require('./api'),
	bodyParser = require('body-parser'),
	app = express();


// a middleware with no mount path; gets executed for every request to app
app.use(function(req, res, next){
	console.log(chalk.red.bgYellow('Time:', moment().format('MMMM Do YYYY, h:mm:ss a')));
	next();
});

app.use(bodyParser.json());

app.use('/api', api);
//app.use(express.static(__dirname + '/api'));

app.get('/', express.static('site'));

var server = app.listen(3000, function(){

	console.log(chalk.green('server started'));
});