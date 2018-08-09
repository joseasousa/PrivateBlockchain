const Blockchain = require('../models/blockchain')
const Block = require('../models/block')
const blockChain = new Blockchain()

module.exports = {
  index: async (req, res) => {
    const size = await blockChain.getBlockHeight()
    res.json({
      status: true,
      message: 'Server is working',
      size: size
    })
  },
  info: async (req, res) => {
    const size = await blockChain.getBlockHeight()
    res.json({
      status: true,
      message: 'Server is working',
      size: size
    })
  },
  block: (req, res) => {
    const blockData = req.body.data

    if (blockData) {
      const newBlock = new Block(blockData)
      blockChain.addBlock(newBlock).then(block => {
        res.json({
          success: true,
          data: newBlock
        })
      })
    } else {
      res.statusCode = 400
      res.json({
        success: false,
        message: `Please provide the block data by setting the data 
        property of the request's body object`
      })
    }
  },
  getBlock: async (req, res) => {
    try {
      const block = await blockChain.getBlock(req.params.height)
      if (block) {
        res.json({
          success: true,
          data: block
        })
      } else {
        res.statusCode = 404
        res.json({
          success: false,
          message: `block ${req.params.height} does not exist.`
        })
      }
    } catch (e) {
      res.statusCode = 500
      res.json({
        success: false,
        message: `Something went wrong while getting block ${req.params.height}`
      })
    }
  }
}
