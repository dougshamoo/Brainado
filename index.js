var app = require('./server/server.js');

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
