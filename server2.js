var express = require('express');
var app = express();

var contactController = require('./controllers/rappi');

app.use('/scripte', express.static(__dirname + '/scripte'));
app.use(express.static('public'));

app.get('/test', function(req, res) {
  contactController.getTranslaterButton(req, res);
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/" + "backup.html");
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
