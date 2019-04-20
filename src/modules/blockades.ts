'use strict'
var json = require('../texts/blocks.json');

export class Blockades {
  currentBlock:number
  potentialBlocks:any

  constructor () {
    this.currentBlock = 1
    this.potentialBlocks = json
    setTimeout(this.updateNewBlock(), this.newTimeout())
  }
  setBlock (value:number) {
    this.currentBlock = value
  }
  updateNewBlock () :any {
    let i = Math.floor(Math.random() * this.potentialBlocks.length)
    console.log('test: ' + this.potentialBlocks[i].text)
    this.currentBlock = this.potentialBlocks[i].value
    setTimeout(this.updateNewBlock, this.newTimeout())
  }
  newTimeout () {
    return Math.floor(Math.random() * 3000) + 10000
  }
}
