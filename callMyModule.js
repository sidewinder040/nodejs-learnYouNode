var myModule = require('./extentionFilter_Module.js');

//myModule(err, /home/mark/Documents/nodejs, txt);
myModule(process.argv[2], process.argv[3], function(err, data) {
  data.forEach(function(file) {
      console.log(file);
  });
});
