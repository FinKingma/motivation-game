import { Internalization } from '../../src/modules/internalization'
import { TaskMotivation } from '../../src/modules/taskMotivation'

test('task motivation should have an intrinsic motivation related to the task',async () => {
    let internalization = new Internalization()
    let taskMotivation = new TaskMotivation(internalization,'drawing', 80);
    expect(taskMotivation.intrinsicTaskMotivation).toBe(80);
});
