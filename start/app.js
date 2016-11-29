
var express = require('express');


// load local json data
var locdata = require(__dirname+'/data/sfo.json');
var cfenv = require('cfenv');

var app = express();


app.use(express.static(__dirname + '/public'));


var appEnv = cfenv.getAppEnv();
console.log(locdata);

// my customized routes
app.get('/sendResponse', function (req, res) {
  res.send('Hello World!');
});

app.get('/getweather', function (req, res) {
  var wdetail = locdata.weather;
  res.send({'wather':wdetail});
});

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
