const http = require('http');
const BufferList = require('bl');

var url = process.argv[2];
var bl = new BufferList();

http.get(url, function (response) {
  response.setEncoding('utf8')
  response.on('data', function(chunk) {
    bl.append(chunk);
  });
 response.on('error', console.error)
 response.on('end', function() {
   console.log(bl.length);
   console.log(bl.toString());
 });
})

// Official Solution:

// var http = require('http')
//      var bl = require('bl')
//
//      http.get(process.argv[2], function (response) {
//        response.pipe(bl(function (err, data) {
//          if (err)
//            return console.error(err)
//          data = data.toString()
//          console.log(data.length)
//          console.log(data)
//        }))
//      })  
