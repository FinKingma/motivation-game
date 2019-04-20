'use strict'
// import texts from '../assets/texts.json'

export class Blockades {
  currentBlock:number
  // potentialBlocks:[]

  constructor () {
    this.currentBlock = 1
    // this.potentialBlocks = texts.blockades
  }
  // setTimeout(updateNewBlock, newTimeout)
  setBlock (value:number) {
    this.currentBlock = value
  }
  updateNewBlock () {
    // let i = Math.floor(Math.random() * this.potentialBlocks.length)
    this.currentBlock = 2
    setTimeout(this.updateNewBlock, this.newTimeout())
  }
  newTimeout () {
    return Math.floor(Math.random() * 3000) + 10000
  }
}
