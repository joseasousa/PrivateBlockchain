const express = require('express')

const routes = express.Router()

const blockChainController = require('./controllers/blockChainController')

routes.get('/', blockChainController.index)

routes.get('/info', blockChainController.info)

routes.get('/block/:height', blockChainController.getBlock)

routes.post('/block', blockChainController.block)

module.exports = routes
