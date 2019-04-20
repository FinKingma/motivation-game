import Motivation from '@/modules/motivation'

describe('motivation game', () => {
  it('should start with 100 strength', () => {
    let motivation = new Motivation();
    expect(motivation.strength).toBe(100);
  })
})
/* new functionality
- add new factor desiredMotivationStrength
- intrinsic motivation always triggers higher internalization, but possibly negative motivation strength

*/

/*

You will draw once your motivation is greater than the things preventing you from it

Interesting: motivation strength is not directly related to a task, which allows you to use the stored energy when switching to a different task

task motivation (whether or not you want to do this task)
- you have an intrinsic motivation for every task that cannot be altered (i.e. drawing = 80)
- your task motivation will be based on your intrinsic task motivation and internalisation
    when your motivation is fully internalised, your task motivation is equal to your intrinsic task motivation
    when your motivation is fully externalised, your task motivation is 0
    some other nice options in the middle

motivation strength (the amount of motivation to do a specific task)
- your motivation strength starts based on your task motivation
- when an external motivation type is triggered, your motivation strength will be temporarily increased
    external greatly increases strength
    etc...
- over time your motivation strength will return to your task motivation
- the longer you hold your trigger, the greater the impact on your motivation strength
- the longer you do not use your triggers, the greater the impact on your motivation strength

internalisation (the amount of motivation that comes from yourself)
- triggering the different types of motivation will affect your internalization:
    external motivation can reduce your internalization completely
    introjected motivations pulls your internalization to 0.2
    identified motivations pulls your internalization to 0.5
    integrated motivation pulls your internalization to 0.8
- intrinsic motivation slowly replenishes your internalization while idle
- the longer you hold your trigger, the greater the impact on your internalisation
- the longer you do not use your triggers, the greater the impact on your internalisation

blockades (everything that is preventing you from being motivated)
- if your motivation strength exceeds your blockades, you are motivated for that task
- over time, new things happen which impact your current blockades
*/
