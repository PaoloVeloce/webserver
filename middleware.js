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

module.exports = middleware;