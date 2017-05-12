var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var map = require('through2-map');
var url = require('url');

var timeEndpoint = "/api/parsetime"
var unixTimeEndpoint = "/api/unixtime"

var server = http.createServer( function(request, response) {
  if (request.method == 'GET') {
    this_query = url.parse(request.url, true);
    var my_date = new Date(this_query.query.iso);
    if (this_query.pathname == timeEndpoint) {
      var time = {"hour": my_date.getHours(), 
                  "minute": my_date.getMinutes(),
                  "second": my_date.getSeconds()}
    }
    else if (this_query.pathname == unixTimeEndpoint) {
      var time = {"unixtime": my_date.getTime()} 
    }
    var myJSON = JSON.stringify(time);
    // respond myJSON string
    if (time) {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(myJSON);
    } else {
      response.writeHead(404);
      response.end("bitch");
  }

})

server.listen(process.argv[2]);

