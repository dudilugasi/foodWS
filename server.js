var mongoose = require('./config/mongoose'),
    express = require('./config/express');

var db = mongoose();

var app = express();

app.listen(process.env.PORT || 8000);

console.log('server is listening');
