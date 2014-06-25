var num = 0;
var args = process.argv;

for (var i = 2; i < args.length; i++) {
num += Number(args[i]);
}
console.log(num);