const Block = require('./block')
const Blockchain = require('./blockchain')

let blockchain = new Blockchain()

blockchain.addBlock(new Block('test data ' + 1))
  .then(
    () => blockchain.addBlock(new Block('test data ' + 2))
      .then(() => blockchain.addBlock(new Block('test data ' + 3)))
      .then(() => blockchain.addBlock(new Block('test data ' + 4)))
      .then(() => blockchain.addBlock(new Block('test data ' + 5)))
      .then(() => blockchain.addBlock(new Block('test data ' + 6)))
      .then(() => blockchain.addBlock(new Block('test data ' + 7)))
      .then(() => blockchain.addBlock(new Block('test data ' + 8)))
      .then(() => blockchain.addBlock(new Block('test data ' + 9)))
      .then(() => blockchain.addBlock(new Block('test data ' + 10)))
      .then(() => blockchain.addBlock(new Block('test data ' + 11)))
  )

setTimeout(() => blockchain.validateChain(), 10000)
