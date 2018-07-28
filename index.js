const express = require('express')

const bodyParser = require('body-parser')

const routes = require('./src/routes')
const app = express()

app.use('/', routes)
app.use(bodyParser)

const PORT = 3000
const HOST = '0.0.0.0'

app.listen(PORT, HOST)
