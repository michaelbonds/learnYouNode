var fs = require('fs');

function read(args) {

  function callback(err, data) {
    if (err) {
      return err;
    } else {
      var buff = [];
      buff  = data.split('\n').length - 1;

      console.log(buff);
    }
  }
  
  fs.readFile(args, 'utf8', callback);
}

read(process.argv[2]);