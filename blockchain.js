const SHA256 = require('crypto-js/sha256')
const leveldb = require('./levelSandbox')

class Blockchain {
  async addBlock (newBlock) {
    newBlock.height = await this.getBlockHeight()

    newBlock.time = new Date()
      .getTime()
      .toString()
      .slice(0, -3)

    if (newBlock.height > 0) {
      const prevBlock = await leveldb.getBlock(newBlock.height - 1)
      newBlock.previousBlockHash = prevBlock.hash
    }

    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString()

    await leveldb.addBlock(newBlock.height, JSON.stringify(newBlock))
  }

  async getBlockHeight () {
    const height = await leveldb.getBlockHeight()
    return height
  }

  async getBlock (blockHeight) {
    const block = await leveldb.getBlock(blockHeight)
    return block
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
      console.log(
        'Block #' +
          blockHeight +
          ' invalid hash:\n' +
          blockHash +
          '<>' +
          validBlockHash
      )
      return false
    }
  }

  async validateChain () {
    let previousHash = ''
    let block = ''
    let isValidBlock = false

    let errorLog = []

    leveldb.getBlockStream().on('data', (data) => {
      block = JSON.parse(data.value)

      isValidBlock = this.validateBlock(block.height)

      if (!isValidBlock) {
        errorLog.push(data.key)
      }

      if (block.previousBlockHash !== previousHash) {
        errorLog.push(data.key)
      }

      previousHash = block.hash
    }).on('error',
      (error) => {
        console.error(`Error on validateChain: ${error}`)
      }).on('close', () => {
      if (errorLog.length > 0) {
        console.log(`Block errors = ${errorLog.length}`)
        console.log(`Blocks: ${errorLog}`)
      } else {
        console.log('No errors detected')
      }
    })
  }
}

module.exports = Blockchain
