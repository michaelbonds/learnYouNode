var fs = require('fs');
var path = require('path');

function now(dirname, ext, callback) {
  fs.readdir(dirname, function(err, list){
    //Check for err from readdir() and give it to the callback
    if (err) {
      return callback(err);
    }else {
      //if no error, continue with filtering list
      var data = [];
      list.forEach(function(file){

        if (path.extname(file) == '.' + ext) {
          data.push(file);
        }
      });
      return callback(null, data);
    }
  });
}

module.exports = now;