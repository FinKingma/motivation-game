import Drawer from './drawer'
import Levels from './levels'
import Texts from './texts'

function Motivation () {
  this.strength = 40
  this.strHistory = []
  this.blocks = 60
  this.blockHistory = []
  this.internalization = 0.7
  this.triggerEffect = 0
  this.levels = new Levels().levels
  this.externalStrength = 0
  this.introjectStrength = 0
  this.identifyStrength = 0
  this.integrateStrength = 0
  this.score = 0
  this.motivated = false
  this.texts = new Texts()
  this.textSarah = '...'
  this.textYou = '...'
  this.blockText = '...'

  this.start = (canvas, blockBubble) => {
    setInterval(this.run, 1000 / this.levels.fps)
    setTimeout(newBlock, this.levels.blockFrequency)
    this.drawer = new Drawer(canvas, blockBubble)
  }
  this.run = () => {
    raiseCharges()
    raiseTriggerEffect()
    raiseStrength((this.internalization - this.levels.internalizationBase) * this.levels.strengthGain, 1)
    addHistory()
    addPoints()
    this.drawer.redrawContext()
    this.drawer.drawBlocks(this.blockHistory, this.blockText)
    this.drawer.drawHistory(this.strHistory)
    this.drawer.drawMotivation(this.strength, this.blockHistory, this.motivated)
  }
  this.externalCharge = () => {
    if (this.externalStrength === 0) {
      this.externalStrength = 1
    }
  }
  this.externalExecute = () => {
    raiseStrength(this.levels.external.raiseStrength, this.externalStrength)
    pullInternalization(this.levels.external.pullInternalization, this.levels.external.pullStrength)
    youSay(this.texts.external)
    this.externalStrength = 0
    resetTrigger()
  }
  this.introjectCharge = () => {
    if (this.introjectStrength === 0) {
      this.introjectStrength = 1
    }
  }
  this.introjectExecute = () => {
    raiseStrength(this.levels.introjected.raiseStrength, this.introjectStrength)
    pullInternalization(this.levels.introjected.pullInternalization, this.levels.introjected.pullStrength)
    youSay(this.texts.introjected)
    this.introjectStrength = 0
    resetTrigger()
  }
  this.identifyCharge = () => {
    if (this.identifyStrength === 0) {
      this.identifyStrength = 1
    }
  }
  this.identifyExecute = () => {
    raiseStrength(this.levels.identified.raiseStrength, this.identifyStrength)
    pullInternalization(this.levels.identified.pullInternalization, this.levels.identified.pullStrength)
    youSay(this.texts.identified)
    this.identifyStrength = 0
    resetTrigger()
  }
  this.integrateCharge = () => {
    if (this.integrateStrength === 0) {
      this.integrateStrength = 1
    }
  }
  this.integrateExecute = () => {
    raiseStrength(this.levels.integrated.raiseStrength, this.integrateStrength)
    pullInternalization(this.levels.integrated.pullInternalization, this.levels.integrated.pullStrength)
    youSay(this.texts.integrated)
    this.integrateStrength = 0
    resetTrigger()
  }
  this.intrinsicExecute = () => {
    let chosenIntrinsicNr = Math.floor(Math.random() * this.levels.intrinsic.pullInternalization.length)
    let chosenIntrinsic = this.levels.intrinsic.pullInternalization[chosenIntrinsicNr]
    pullInternalization(chosenIntrinsic, this.levels.intrinsic.pullStrength)
    if (chosenIntrinsic > this.levels.internalizationBase) {
      sarahSays(this.texts.intrinsicPositive)
    } else {
      sarahSays(this.texts.intrinsicNegative)
    }
  }
  var newBlock = () => {
    let i = Math.floor(Math.random() * this.levels.blocks.length)
    this.blockText = this.levels.blocks[i].text
    this.blocks = this.levels.blocks[i].block
    this.blockBubbleTop = 430 - (this.blocks * 4.5)
    let newTimeout = Math.floor(Math.random() * this.levels.blockFrequencyOffset) + this.levels.blockFrequency
    setTimeout(newBlock, newTimeout)
  }
  var resetTrigger = () => {
    this.triggerEffect = 0
  }
  var addPoints = () => {
    if (this.blockHistory.length > 21 && this.strength > this.blockHistory[21]) {
      this.motivated = true
      this.score++
    } else {
      this.motivated = false
    }
  }
  var raiseCharges = () => {
    if (this.externalStrength > 0 && this.externalStrength <= 100) {
      this.externalStrength += 5
    }
    if (this.introjectStrength > 0 && this.introjectStrength <= 100) {
      this.introjectStrength += 5
    }
    if (this.identifyStrength > 0 && this.identifyStrength <= 100) {
      this.identifyStrength += 5
    }
    if (this.integrateStrength > 0 && this.integrateStrength <= 100) {
      this.integrateStrength += 5
    }
  }
  var raiseTriggerEffect = () => {
    this.triggerEffect += this.levels.triggerGain
    this.triggerEffect = Number((this.triggerEffect).toFixed(2))
    if (this.triggerEffect % this.levels.intrinsicKickIn === 0 && this.motivated) {
      this.intrinsicExecute()
    }
  }
  var raiseStrength = (amount, triggerStrength) => {
    amount *= Math.min(this.triggerEffect, 5)
    amount *= 1 + (triggerStrength / 50)
    this.strength += amount
    // let offset = (this.internalization * 100) - this.strength
    // let adjustment = offset * Math.min((this.triggerEffect), 0.1)
    // console.log(adjustment)
    // this.strength += adjustment
    if (this.strength > this.levels.maxStrength) {
      this.strength = this.levels.maxStrength
    } else if (this.strength < this.levels.minStrength) {
      this.strength = this.levels.minStrength
    }
  }
  var addHistory = () => {
    this.strHistory.unshift(this.strength)
    if (this.strHistory.length >= 42) {
      this.strHistory.pop()
    }
    this.blockHistory.unshift(this.blocks)
    if (this.blockHistory.length >= 42) {
      this.blockHistory.pop()
    }
  }
  var pullInternalization = (level, pullStrength) => {
    let difference = level - this.internalization
    let internalizationChange = (difference / this.levels.pullScale) * pullStrength
    internalizationChange = reduceInternalizationBasedOnMotivationStrength(internalizationChange)
    this.internalization += internalizationChange
  }
  var reduceInternalizationBasedOnMotivationStrength = (internalizationChange) => {
    if (internalizationChange > 0) {
      internalizationChange = internalizationChange * (this.strength / this.levels.strengthScale)
    }
    return internalizationChange
  }
  var youSay = (texts) => {
    let chosenTextNr = Math.floor(Math.random() * texts.length)
    let chosenText = texts[chosenTextNr]
    this.textYou = '"' + chosenText + '"'
    this.textSarah = '...'
  }
  var sarahSays = (texts) => {
    let chosenTextNr = Math.floor(Math.random() * texts.length)
    let chosenText = texts[chosenTextNr]
    this.textSarah = '"' + chosenText + '"'
    this.textYou = '...'
  }
}

module.exports = Motivation
