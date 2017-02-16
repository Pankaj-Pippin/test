var http = require("http");
var shell = require('shelljs');
var qs = require('querystring');
var fs = require('fs');
var nodemailer= require('nodemailer');


http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   
   request.on('end', function () {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello Tester\n');
   });
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

function js_yyyy_mm_dd_hh_mm_ss () {
  //24 hr format
  now = new Date();
  year = "" + now.getFullYear();
  month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
  day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
  hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
  minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
  second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
  return year + "_" + month + "_" + day + "_" + hour + "_" + minute + "_" + second;
}