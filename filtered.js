var fs = require('fs');
var path = require('path');

(function(args) {
  fs.readdir(args[2], function(err, list) {
    if (err) {
      console.log(String(err));
    } else {

      for (var i in list) {
        var ext = path.extname(list[i]);
        ext = ext.substr(1, ext.length);

        if (ext == args[3]) {
          console.log(list[i]);
        }
      }
    }

  });
})(process.argv)