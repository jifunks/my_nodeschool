var fs = require("fs");
var path = require("path");

module.exports = function filterExtensionList(filterDir, filterExtension, callback){
    var my_array = [];
    fs.readdir(filterDir, function(err, list) {
        if (err) return callback(err);
        filterExtension = "." + filterExtension;
        list.filter(function(file){
            return path.extname(file) === filterExtension;
        });
        callback(null, list);
    })
}


