var fs = require('fs')
var path = require('path')

module.exports = function(dirPath, extName, callback) {
  fs.readdir(process.argv[2], function(err, list) {
    if (err) return callback(err);
    //console.log(list);
    var filtered = [];
    for (var i in list) {
      //console.log(list[i] + " entention is: " + path.extname(list[i]));
      if (path.extname(list[i]) === "." + process.argv[3].toString()) {
        //console.log(list[i]);
        filtered.push(list[i]);
      }
    }
    return callback(err, filtered);
  });
}
