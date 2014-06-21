var express = require('express');
var app = express();
var url = require('url');
var https = require('https');
var swig  = require('swig');

// Configure swig to work with express
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/secure');

// Configure static serving for public content
app.configure(function() {
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  app.use(app.router);

});

// Serve homepage
app.get('/', function(request, response) {
  response.sendfile(__dirname + "/public/index.html");
});

// Serve login page
app.get('/login', function(request, response) {
  response.render('login', { /* template locals defined */ });
});

// Handle mongodb login
app.get('/authenticate', function(request, response) {
  /* Check to see if a registered user */
  response.send({'status':'success'});
});

// Serve the dashboard
app.get('/dashboard', function(request, response) {
    response.render('dashboard', { /* template locals defined */ });
});

// Catch 404s
app.get('*', function(req, res) {
  res.sendfile(__dirname + "/public/404.html");
});

// Listen on ports
app.listen(process.env.PORT || 5000);
console.log('Listening on port 5000');