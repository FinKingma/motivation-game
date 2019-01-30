function Levels () {
  this.levels = {
    fps: 10,
    internalizationBase: 0.7,
    strengthGain: 10,
    maxStrength: 100,
    minStrength: 0,
    maxInternalization: 1,
    minInternalization: 0,
    pullScale: 10,
    strengthScale: 50,
    maxTriggerEffect: 5,
    triggerGain: 0.02,
    intrinsicKickIn: 1,
    intrinsic: {
      pullInternalization: [1, 1, 0.5, 0.2],
      pullStrength: 2,
      raiseStrength: 0
    },
    integrated: {
      pullInternalization: 0.8,
      pullStrength: 1,
      raiseStrength: 0
    },
    identified: {
      pullInternalization: 0.5,
      pullStrength: 2,
      raiseStrength: 5
    },
    introjected: {
      pullInternalization: 0.2,
      pullStrength: 3,
      raiseStrength: 10
    },
    external: {
      pullInternalization: 0,
      pullStrength: 4,
      raiseStrength: 20
    }
  }
}

module.exports = Levels
