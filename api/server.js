const express = require('express'),
  cors = require('./config/cors'),
  server = express(),
  port = process.env.PORT || 8081,
  host = process.env.HOST || '127.0.0.1'
  bodyParser = require('body-parser'),
  queryParser = require('express-query-int');

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors)
server.use(queryParser())

server.listen(port, host, ()=>{console.log('Server UP ;)')})

module.exports = server