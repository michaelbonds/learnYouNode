var http = require('http');

function start(args) {
  function dataStream(request, callback) {
    var allData = new String();

      http.get(request, function(stream){
      
        stream.on('error', function(err){
          return callback(err);
        });
        stream.on('data', function(data){
          allData += data;
        }).setEncoding('utf8');

        stream.on('end', function(){
          return callback(null, allData);
        });
      });
  }
  dataStream(args[2], function(err, data){
    if (err){
      console.log(err)
    } else {
      console.log(data.length + '\n' + data);
    }
  });
}
start(process.argv)