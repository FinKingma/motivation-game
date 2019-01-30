function Drawer (canvas) {
  this.canvas = canvas
  this.redrawContext = () => {
    let context = this.canvas.getContext('2d')
    this.canvas.width = 800
    this.canvas.height = 400
    context.fillStyle = 'lightblue'
    context.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }
  this.drawCircle = (strength, blocks) => {
    let context = this.canvas.getContext('2d')
    context.beginPath()
    let top = ((100 - strength) * 3.5) + 25
    context.arc(400, top, 20, 0, 2 * Math.PI, true)
    if (strength > blocks) {
      context.fillStyle = 'green'
    } else {
      context.fillStyle = 'red'
    }
    context.fill()
    context.stroke()
  }
  this.drawBlocks = (blocks) => {
    let context = this.canvas.getContext('2d')
    context.strokeStyle = 'grey'
    context.lineWidth = 1
    context.beginPath()
    let top = ((100 - blocks) * 3.5) + 25
    context.lineTo(0, top)
    context.lineTo(800, top)
    context.stroke()
  }
  this.drawHistory = (strHistory) => {
    let context = this.canvas.getContext('2d')
    context.strokeStyle = 'black'
    context.lineWidth = 1
    context.beginPath()
    let left = 400
    for (let amount of strHistory) {
      left -= 10
      let top = ((100 - amount) * 3.5) + 25
      context.lineTo(left, top)
    }
    context.stroke()
  }
}

module.exports = Drawer
