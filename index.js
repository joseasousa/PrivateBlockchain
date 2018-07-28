const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')

const routes = require('./src/routes')
const app = express()

app.use(compression())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('method-override')())

app.use('/', routes)

const PORT = 3000
const HOST = '0.0.0.0'

app.listen(PORT, HOST)
