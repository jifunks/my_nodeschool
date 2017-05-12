var fs = require('fs');

my_file = process.argv[2];

fs.createReadStream(my_file).pipe(process.stdout);

