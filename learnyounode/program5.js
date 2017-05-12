var fs = require("fs");
var path = require("path");


fs.readdir(filterDir, function(err, list) {
    if (err) {return console.log(err.toString());}
    var filterDir = process.argv[2];
    var filterExtension = "." + process.argv[3];
    for (var i = 0; i < list.length; i++) {
        if (path.extname(list[i]) == filterExtension) {
           console.log(list[i]);
        } 
    }
})

