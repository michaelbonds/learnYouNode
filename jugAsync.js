var http = require('http'),
  urls = [],
  datas = [],
  num = 0;

//Extract urls from arguments
for (var i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i]);
}

// Now, we use those urls
function call(urls, callback) {
  urls.forEach(function(url, index) {
    http.get(url, function(stream) {
      var allData = new String();
      // If the Stream returns an error, we
      // feed it to the callback
      stream.on('error', function(err) {
        return callback(err);
      });

      stream.on('data', function(data) {
        allData += data;
      });

      stream.on('end', function() {
        num++;
        callback(null, allData, num, index);
      });
    });
  });
}

function callback(err, data, numberOfCallbacks, index) {
  if (err) {
    console.log(err);
  } else {
    datas[index] = data;
    if (numberOfCallbacks > 2) {
      datas.forEach(function(data) {
        console.log(data);
      });
    }
  }
}

call(urls, callback);