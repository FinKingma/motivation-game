import TaskMotivation from '@/modules/taskMotivation'

describe('task motivation', () => {
  it('should start with a fixed intrinsic motivation for the specified task', () => {
    let taskMotivation = new TaskMotivation('drawing', 80);
    expect(taskMotivation.intrinsicTaskMotivation).toBe(80);
  })

  it('your task motivation will be based on your intrisic task motivation and internalization', () => {
    let taskMotivation = new TaskMotivation('drawing', 80);
    expect(taskMotivation.intrinsicTaskMotivation).toBe(80);
  })

    // when your motivation is fully internalised, your task motivation is equal to your intrinsic task motivation
    // when your motivation is fully externalised, your task motivation is 0
    // some other nice options in the middle
})
