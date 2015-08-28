var express = require('express'),
	logger = require('morgan'),
	app = express(),
	path = require('path'),
	mongoose = require('mongoose'),
	quotesRoute = require('./app/routes/quotes.route'),
	bodyParser = require('body-parser');



mongoose.connect('mongodb://localhost/lifsay', function(err) {
	if (err) { 
		console.log(err);
	} else {
		console.log('Successfully connected to your database');
	}
});


app.set('port', 3000);
app.set('appName', 'LifSay');
app.use(express.static(path.join(__dirname + '/public')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
	console.log('A user has came to your app ', req.ip);
	next();
});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use('/say', quotesRoute);

app.listen(app.get('port'), function() {
	console.log('App listening on port ', app.get('port'));
});