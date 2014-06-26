var fs = require('fs');
var filter = require('./filter.js');

(function(args){
  filter(args[2], args[3], function(err, data){
    if(err) {
      console.log(String(err));
    } else {
      data.forEach(function(file){
        console.log(file);
      });
    }
  });
})(process.argv)