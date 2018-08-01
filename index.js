const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const routes = require('./src/routes')

const PORT = parseInt(process.env.PORT, 10) || 3000
const HOST = '0.0.0.0'

const server = express()

server.use(compression())

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(require('method-override')())

server.use('/', routes)

server.listen(PORT, HOST)
