
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var home = require('./routes/home');
var feed = require('./routes/feed');
// Example route
// var user = require('./routes/user');

var app = express();


// app.engine('html', handlebars({extname:'html'}));
// app.set('view engine', 'html');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', handlebars({extname:'html'}));
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', function(req,res){
	res.render("landing")
});
app.get('/home', home.view);
app.get('/profile', function(req,res){
	res.render("profile")
});
app.get('/quests', function(req,res){
	res.render("quests")
});
app.get('/feed', feed.view);
app.get('/settings', function(req,res){
	res.render("settings")
});
app.get('/login', function(req,res){
	res.render("login")
});
app.get('/upload', function(req,res){
	res.render("upload")
});
app.get('/uploadComplete', function(req,res){
	res.render("uploadComplete")
});
app.get('/newuser', function(req,res){
	res.render("newuser")
});
app.get('/landing', function(req,res){
	res.render("landing")
});
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
