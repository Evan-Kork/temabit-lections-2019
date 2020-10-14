var express = require('express');

var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use(express.static('./public'));
const request = require('request');

app.get('/', function(req, res){
	request(encodeURI(req.query.url), function (error, response, body) {
	console.log(req.query.url)

	res.header('Access-Control-Allow-Origin' , "*	" );
  	res.send(body); 
});
});
app.listen(9998);
console.log('Server is running on port 9998');