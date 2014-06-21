var express = require('express');
var app = express();
var url = require('url');
var https = require('https');
var requestify = require('requestify');

// Configure static
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

// Initially server index
app.get('/', function(request, response) {
  response.sendfile(__dirname + "/public/login.html");
});

// Catch 404s
app.get('*', function(req, res) {
  res.sendfile(__dirname + "/public/404.html");
});

// Listen
app.listen(process.env.PORT || 5000);
console.log('Listening on port 5000');