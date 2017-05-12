var through = require('through2');
var concat = require('concat-stream');
var http = require('http');

var stream = through(write,end);

var count = 1;
function write(buffer, encoding, next) {
  if (count % 2 == 0) {
    this.push(buffer.toString().toUpperCase());
  } else {
    this.push(buffer.toString().toLowerCase());
  }
  count++;
  next();
}

function end (done) {
  done();
}

process.stdin.pipe(stream).pipe(process.stdout);
