"use strict";

require('dotenv').config();

var pug = require('pug');

var express = require('express');

var app = express();
var port = process.env.PORT;

var controller = require('./controller');

var contacts = require('./json_database/db.json');

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({
  // to support URL-encoded bodies
  extended: true
}));
app.set('view engine', 'pug');
app.use(express["static"]('public'));
app.get('/', controller.index);
app.get('/new', controller["new"]);
app.post('/create', controller.create);
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});