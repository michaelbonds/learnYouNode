var http = require('http');

(function(args){
  http.get(args[2], function(stream){

    stream.on("data", function(data){
      console.log(data);
    }).setEncoding('utf8');
    
    stream.on("error", function(error){
      console.log(error);
    });

  });
})(process.argv)