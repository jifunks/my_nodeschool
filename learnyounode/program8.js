var http = require("http");
var bl = require('bl');

http.get(process.argv[2], function(response) {
    response.pipe(bl(function (err, data) {
        if (err) { console.log("whoopsie", err); };
        console.log(data.length.toString());
        console.log(data.toString());
    }));
});

http.get(process.argv[2], callback);

var callback = function(response) {
    response.pipe(bl(function (err, data) {
        if (err) { console.log("whoopsie", err); };
        console.log(data.length.toString());
        console.log(data.toString());
    }));
});

