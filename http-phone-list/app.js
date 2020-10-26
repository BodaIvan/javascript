require('dotenv').config()
const pug = require('pug')
const express = require('express')
const app = express()
const port = process.env.PORT
const controller=require('./controller')
var contacts = require('./json_database/db.json')
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.set('view engine', 'pug')
app.use(express.static('public'));



app.get('/', controller.index)
app.get('/new', controller.new)
app.post('/create', controller.create)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})