var http = require('http'),
 fs  = require('fs'),
 args = process.argv;
 
http.createServer(function(request, response) {
  var fileStream = fs.createReadStream(args[3]);
  fileStream.on('open', function() {
    fileStream.pipe(response);
  });
}).listen(args[2]);