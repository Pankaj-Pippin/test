/*var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World from CentOS6 in Docker');
});

app.listen(PORT)
*/

var http = require('http');
var PORT = 8080;

// This is just an example HTTP server. Use your own application here.
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello World from CentOS6 in Docker');
});

// listen strats the server on the given port.
exports.listen = function(port) {
    console.log('Listening on: ' + port);
    server.listen(port);
};

// close destroys the server.
exports.close = function() {
    server.close();
};


console.log('Running on http://localhost:' + PORT);
