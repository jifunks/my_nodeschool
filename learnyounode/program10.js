var net = require('net');
var strftime = require('strftime');

var server = net.createServer( function (socket) {
  // write data then close socket
  socket.end(strftime("%Y-%m-%d %H:%M\n"));
})
server.listen(process.argv[2]);

