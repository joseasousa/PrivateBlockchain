const SHA256 = require('crypto-js/sha256')
const Block = require('./block')
const leveldb = require('./levelSandbox')

class Blockchain {
  constructor () {
    this.chainHeight = -1
    this.addBlock(new Block('First block in the chain - Genesis block'))
  }

  async addBlock (newBlock) {
    newBlock.height = this.chainHeight + 1

    newBlock.time = new Date().getTime().toString().slice(0, -3)

    if (newBlock.height > 0) {
      const prevBlock = await leveldb.getBlock(newBlock.height - 1)
      newBlock.previousBlockHash = prevBlock.hash
    }

    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString()

    await leveldb.addBlock(newBlock.height, JSON.stringify(newBlock))

    this.chainHeight = newBlock.height
  }

  async getBlockHeight () {
    const height = await leveldb.getBlockHeight()
    return height
  }

  async getBlock (blockHeight) {
    const block = await leveldb.getBlock(blockHeight)
    return JSON.parse(block)
  }

  async getChain () {
    const chain = await leveldb.getChain()
    return chain
  }

  async validateBlock (blockHeight) {
    const block = await leveldb.getBlock(blockHeight)

    let blockHash = block.hash

    block.hash = ''

    let validBlockHash = SHA256(JSON.stringify(block)).toString()

    if (blockHash === validBlockHash) {
      console.log('Block #' + blockHeight + ' validated')
      return true
    } else {
      console.log('Block #' + blockHeight + ' invalid hash:\n' + blockHash + '<>' + validBlockHash)
      return false
    }
  }

  async validateChain () {
    const chain = await leveldb.getChain()
    let errorLog = []

    for (var i = 0; i < chain.length - 1; i++) {
      if (!this.validateBlock(i)) errorLog.push(i)

      let blockHash = chain[i].hash
      let previousHash = chain[i + 1].previousBlockHash
      if (blockHash !== previousHash) errorLog.push(i)
    }

    if (errorLog.length > 0) {
      console.log('Block errors = ' + errorLog.length)
      console.log('Blocks: ' + errorLog)
    } else {
      console.log('No errors detected')
    }
  }
}

module.exports = Blockchain
