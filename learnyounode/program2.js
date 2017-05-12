// accepts one or more numbers as command line arguments
// prints sum of those numbers to console (stdout)
// console.log(process.argv);
var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
    sum += +process.argv[i];
}
console.log(sum);

