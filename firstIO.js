var fs = require('fs');
var args = process.argv;
fs.readFileSync(args[1]);
data = data.toString();
console.log(data);