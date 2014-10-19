var express = require("express");
var app = express();

var apiTextController = require("./server/controllers/apiTextController");

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/img', express.static(__dirname + '/client/img'));
app.use('/', express.static(__dirname + '/client'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/api/*', apiTextController.text);

app.listen(3000);