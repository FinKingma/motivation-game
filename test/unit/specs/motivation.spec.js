import Motivation from '@/modules/motivation'

describe('motivation game', () => {
  it('should start with 100 strength', () => {
    let motivation = new Motivation();
    expect(motivation.strength).toBe(100);
  })
})
// specs
// 1. internalization polarizes between 0 (externalised) and 1 (internalized)

// 2. external motivation drastically pulls your internalization till 0, but also greatly heightens your temporary strength
// 3. introjected motivations pulls your internalization till 0.2, but also heightens your temporary strength
// 4. identified motivations pulls your internalization till 0.5 and heightens your temporary strength
// 5. integrated motivation pulls your internalization to 0.8
// 6. intrinsic motivation slowly pulls your internalization 1 when idle (not other interactions for 5 seconds)

// 7. the longer you press the action button, the stronger the effect will be
// 8. the last 50 strength positions are remembers and leave a trail to show progress
// 9. occasionally stars pop up and can be caught for points (by having the right strength at that moment)
