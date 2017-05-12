var mymodule = require("./program6_module.js");

var thisDirectory = process.argv[2];
var thisExtension = process.argv[3]; 

mymodule(thisDirectory, thisExtension, function(err, list) {
    if (err) console.log("whoopsie!", err);
    list.forEach(function(i){
        console.log(i)
    })
})



