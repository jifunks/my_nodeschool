var fs = require('fs');

fs.readFile(process.argv[2], my_callback);

function my_callback(error, fileData) {
    if (error) return console.error(error);
    var fileString = fileData.toString();
    console.log(fileString.split('\n').length - 1);
};

fs.readFile(process.argv[2], function(err, contents) {
    if (err) {
        return console.log("I'm gay");
    }
    var numLines = contents.toString().split('\n').length - 1;
    console.log(numLines);
})
