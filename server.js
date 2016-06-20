var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next) {
		// asks for a date and url to log into terminal
		console.log('Request: ' + new Date().toString() + req.method + ' ' + req.originalUrl);
		next();
	}
};

// using logger before every GET action on our small webserver
app.use(middleware.logger);

// creating about page with 'About Express page'
app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Express page');
});
// takes the the contents of public directory to server
app.use(express.static(__dirname +'/public'));
// console.log(__dirname);
app.listen(3000, function () {
	console.log('Server running at port ' + PORT + ' !');
});