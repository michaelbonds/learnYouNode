function handlers(request) {
  function json(request) {
  var obj = {},
  time = request.substr(request.indexOf('T') + 1, request.indexOf('.') - 1);
  time = time.toString().slice(':').slice('.');
  console.log(time);
  }
  json(request);

  function epoch(request) {

  }
}

handlers(process.argv[2])