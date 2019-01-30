import Drawer from './drawer'
import Levels from './levels'
import Texts from './texts'

function Motivation () {
  this.strength = 40
  this.internalization = 0.8
  this.triggerEffect = 0
  this.strHistory = []
  this.blocks = 60
  this.levels = new Levels().levels
  this.externalStrength = 0
  this.introjectStrength = 0
  this.identifyStrength = 0
  this.integrateStrength = 0
  this.score = 0
  this.texts = new Texts()
  this.text = '"Gebruik de toetsen 1 t/m 4 om haar te motiveren om te tekenen, zolang haar motivatie boven de groene streep staat, is ze gemotiveerd!"'

  this.start = (canvas) => {
    setInterval(this.run, 1000 / this.levels.fps)
    this.drawer = new Drawer(canvas)
  }
  this.run = () => {
    raiseCharges()
    raiseTriggerEffect()
    raiseStrength((this.internalization - this.levels.internalizationBase) * this.levels.strengthGain, 1)
    addHistory()
    addPoints()
    this.drawer.redrawContext()
    this.drawer.drawHistory(this.strHistory)
    this.drawer.drawCircle(this.strength, this.blocks)
    this.drawer.drawBlocks(this.blocks)
  }
  this.externalCharge = () => {
    if (this.externalStrength === 0) {
      this.externalStrength = 1
    }
  }
  this.externalExecute = () => {
    raiseStrength(this.levels.external.raiseStrength, this.externalStrength)
    pullInternalization(this.levels.external.pullInternalization, this.levels.external.pullStrength)
    sayText(this.texts.actor, this.texts.external)
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
    sayText(this.texts.actor, this.texts.introjected)
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
    sayText(this.texts.actor, this.texts.identified)
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
    sayText(this.texts.actor, this.texts.integrated)
    this.integrateStrength = 0
    resetTrigger()
  }
  this.intrinsicExecute = () => {
    let chosenIntrinsicNr = Math.floor(Math.random() * this.levels.intrinsic.pullInternalization.length)
    let chosenIntrinsic = this.levels.intrinsic.pullInternalization[chosenIntrinsicNr]
    pullInternalization(chosenIntrinsic, this.levels.intrinsic.pullStrength)
    if (chosenIntrinsic > this.levels.internalizationBase) {
      sayText(this.texts.actor, this.texts.intrinsicPositive)
    } else {
      sayText(this.texts.actor, this.texts.intrinsicNegative)
    }
    resetTrigger()
  }
  var resetTrigger = () => {
    this.triggerEffect = 0
  }
  var addPoints = () => {
    if (this.strength > this.blocks) {
      this.score++
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
    if (this.triggerEffect <= this.levels.maxTriggerEffect) {
      this.triggerEffect += this.levels.triggerGain
    }
    this.triggerEffect = Number((this.triggerEffect).toFixed(2))
    if (this.triggerEffect % this.levels.intrinsicKickIn === 0) {
      this.intrinsicExecute()
    }
  }
  var raiseStrength = (amount, triggerStrength) => {
    amount *= this.triggerEffect
    amount *= 1 + (triggerStrength / 50)
    this.strength += amount
    if (this.strength > this.levels.maxStrength) {
      this.strength = this.levels.maxStrength
    } else if (this.strength < this.levels.minStrength) {
      this.strength = this.levels.minStrength
    }
  }
  var addHistory = () => {
    this.strHistory.unshift(this.strength)
    if (this.strHistory.length >= 100) {
      this.strHistory.pop()
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
  var sayText = (actor, texts) => {
    let chosenTextNr = Math.floor(Math.random() * texts.length)
    let chosenText = texts[chosenTextNr]
    this.text = actor + ': "' + chosenText + '"'
  }
}

module.exports = Motivation
