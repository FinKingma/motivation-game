import { TaskMotivation } from './taskMotivation';
import { Internalization } from './internalization';
import { Blockades } from './blockades';

export class MotivationService {
  internalization:Internalization
  taskMotivation:TaskMotivation
  blockades:Blockades
  score:number

  constructor () {
    this.internalization = new Internalization()
    this.taskMotivation = new TaskMotivation(this.internalization, 'drawing', 80)
    this.blockades = new Blockades()
    this.score = 0
  }
  triggerExternal (strength:number) {
    this.internalization.value = 0
  }
  triggerIntrojected (strength:number) {
    this.internalization.value = 0.2
  }
  triggerIdentified (strength:number) {
    this.internalization.value = 0.5
  }
  triggerIntegrated (strength:number) {
    this.internalization.value = 0.8
  }
  triggerIntrinsic () {
    this.internalization.value = 1
  }
}
