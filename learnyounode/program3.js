var fs = require('fs');
var filename = process.argv[2];
var filestring = fs.readFileSync(filename).toString();
var this_length = filestring.split('\n').length - 1;
console.log(this_length);
