var posts = require('../feed.json');

exports.view = function(req, res) {
	res.render('feed', posts);
	console.log('test');
};