(function(args){
    var sum = 0;

    for (var i = 0; i < args.length; i++) {
      if (i >= 2) {
        sum += +args[i];
      }
    } 
    console.log(sum);
  })(process.argv);