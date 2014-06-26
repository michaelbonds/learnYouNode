var fs = require('fs');

(function(filePath) {
  var file  = fs.readFileSync(filePath),
  lines     = [],
  sum       = 0;

  file  = file.toString();
  lines = file.split('\n');
  sum   = lines.length - 1;
  console.log(sum);

})(String(process.argv[2]))