'use strict'
import { Internalization } from './internalization';

export class TaskMotivation {
  intrinsicTaskMotivation:number
  taskName:string
  value:number
  internalization:Internalization

  constructor (internalization:Internalization, name:string, initialValue:number) {
    this.intrinsicTaskMotivation = initialValue
    this.taskName = name
    this.value = initialValue
    this.internalization = internalization
    setInterval(this.revertTaskMotivation, 25)
  }

  revertTaskMotivation () {
    let difference = this.intrinsicTaskMotivation - this.value
    let adjustment = difference * 1
    this.value += adjustment
  }
}
