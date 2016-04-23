var fs = require('fs');
//var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
  if (err) throw err;
  console.log(list);

});
