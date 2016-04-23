var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
  if (err) throw err;
  //console.log(list);
  for (var i in list) {
    //console.log(list[i] + " entention is: " + path.extname(list[i]));
    if (path.extname(list[i]) === "." + process.argv[3].toString()) {
      console.log(list[i]);
    }
  }
});

// official version

// var fs = require('fs')
//      var path = require('path')
//
//      fs.readdir(process.argv[2], function (err, list) {
//        list.forEach(function (file) {
//          if (path.extname(file) === '.' + process.argv[3])
//            console.log(file)
//      })
// })
