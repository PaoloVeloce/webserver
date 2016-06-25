var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

// using logger before every GET action on our small webserver
app.use(middleware.logger);

// creating about page with 'About Express page'
app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Express page');
});
// takes the the contents of public directory to server
app.use(express.static(__dirname +'/public'));
// console.log(__dirname);
app.listen(PORT, function () {
	console.log('Server running at port ' + PORT + ' !');
});