var net = require('net');

var server = net.createServer(function(socket) {
  var date = new Date(),
  year     = date.getFullYear(),
  month    = date.getMonth() + 12,
  day      = date.getDate(),
  hours    = date.getHours(),
  minutes  = date.getMinutes(),
  data;

data = 
(function(year, month, day, hours, minutes) {
  var date = new String();
  function zeroFill(number) {
    if (+number < 10) {
      number = '0' + number.toString();
    }
    return number;
  }
  date = (year.toString() + '-' + zeroFill(month) + '-' + 
            zeroFill(day) + ' ' + zeroFill(hours) + 
            ':' + zeroFill(minutes) + '\n');
  return date;
})(year, month, day, hours, minutes);

  socket.end(data);
});

server.listen(process.argv[2]);