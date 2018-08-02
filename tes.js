const Block = require('./src/models/block')
const Blockchain = require('./src/models/blockchain')
let blockchain = new Blockchain()

blockchain.addBlock(new Block('test data ' + 1)).then(() =>
  blockchain
    .addBlock(new Block('test data ' + 2))
    .then(() => blockchain.addBlock(new Block('test data ' + 3)))
    .then(() => blockchain.addBlock(new Block('test data ' + 4)))
    .then(() => blockchain.addBlock(new Block('test data ' + 5)))
    .then(() => blockchain.addBlock(new Block('test data ' + 6)))
    .then(() => blockchain.addBlock(new Block('test data ' + 7)))
    .then(() => blockchain.addBlock(new Block('test data ' + 8)))
    .then(() => blockchain.addBlock(new Block('test data ' + 9)))
    .then(() => blockchain.addBlock(new Block('test data ' + 10)))
)
blockchain.validateChain()
