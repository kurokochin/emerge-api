var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var emergencyHandler = require('./emergencyHandler');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();


router.route('/p3k/:type')
	.get(emergencyHandler);


app.use('/api', router);

// Start server
console.log('Listening on port : ' + port);
app.listen(port);

module.exports = app;