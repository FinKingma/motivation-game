function Drawer (canvas) {
  this.canvas = canvas
  this.redrawContext = () => {
    let context = this.canvas.getContext('2d')
    this.canvas.width = 800
    this.canvas.height = 500
    context.fillStyle = 'lightblue'
    context.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }
  this.drawMotivation = (strength, blocks, motivated) => {
    let context = this.canvas.getContext('2d')
    context.beginPath()
    let top = ((100 - strength) * 4.5) + 25
    context.arc(400, top, 20, 0, 2 * Math.PI, true)
    if (motivated) {
      context.fillStyle = 'green'
    } else {
      context.fillStyle = 'red'
    }
    context.fill()
    context.stroke()
  }
  this.drawBlocks = (blocks, text) => {
    let context = this.canvas.getContext('2d')
    context.beginPath()
    let left = 800
    let top
    top = ((100 - blocks[0]) * 4.5) + 25
    context.font = '16px Avenir'
    context.fillStyle = 'black'
    context.fillText(text, 500, top - 3)
    for (let block of blocks) {
      top = ((100 - block) * 4.5) + 25
      context.lineTo(left, top)
      left -= 20
    }
    context.lineTo(-10, top)
    context.lineTo(-10, 500)
    context.lineTo(800, 500)
    context.fillStyle = 'grey'
    context.fill()
  }
  this.drawHistory = (strHistory) => {
    let context = this.canvas.getContext('2d')
    context.strokeStyle = 'black'
    context.lineWidth = 1
    context.beginPath()
    let left = 400
    for (let amount of strHistory) {
      let top = ((100 - amount) * 4.5) + 25
      context.lineTo(left, top)
      left -= 10
    }
    context.stroke()
  }
}

module.exports = Drawer
