<template>
  <div>
    <div id='header'>
      <h1>Tekenen of niet tekenen</h1>
    </div>
    <div id='content'>
      <div id='leftPane'>
        <ul>
          <li>
            <button @mousedown="externalCharge" @mouseup="externalExecute" @mouseleave="externalExecute">1) forceer</button>
            <hr align=left class='motivatorLine' v-bind:style="{ width: motivation.externalStrength + '%'}">
          </li>
          <li>
            <button @mousedown="introjectCharge" @mouseup="introjectExecute" @mouseleave="introjectExecute">2) Voer druk uit</button>
            <hr align=left class='motivatorLine' v-bind:style="{ width: motivation.introjectStrength + '%'}">
          </li>
          <li>
            <button @mousedown="identifyCharge" @mouseup="identifyExecute" @mouseleave="identifyExecute">3) Vraag het</button>
            <hr align=left class='motivatorLine' v-bind:style="{ width: motivation.identifyStrength + '%'}">
          </li>
          <li>
            <button @mousedown="introjectCharge" @mouseup="introjectExecute" @mouseleave="introjectExecute">4) Daag uit</button>
            <hr align=left class='motivatorLine' v-bind:style="{ width: motivation.integrateStrength + '%'}">
          </li>
        </ul>
        <h2>points: {{ motivation.score }} </h2>
      </div>
      <div id='rightPane'>
        <img src='../assets/sarah.png' class='sarah-image' />
        <div class='bubble sarah'>{{ motivation.textSarah }}</div>
        <div class='internalization'>
          <div class='internalizationFill' v-bind:style="{ height: ( (1 - motivation.internalization) * 100) + '%'}" />
          <p class='internalizationLabel'>internalization</p>
        </div>
        <img src='../assets/jij.png' class='jij-image' />
        <div class='bubble jij'>{{ motivation.textYou }}</div>
        <canvas id='canvasField' ref="canvasField" />
      </div>
    </div>
  </div>
</template>

<script>
import Motivation from '@/modules/motivation'

export default {
  name: 'MotivationGame',
  data () {
    return {
      motivation: new Motivation()
    }
  },
  mounted () {
    let canvas = this.$refs.canvasField
    this.motivation.start(canvas)
    document.addEventListener('keydown', (event) => {
      switch (event.which) {
        case 49:
          this.externalCharge()
          break
        case 50:
          this.introjectCharge()
          break
        case 51:
          this.identifyCharge()
          break
        case 52:
          this.integrateCharge()
          break
      }
    })
    document.addEventListener('keyup', (event) => {
      switch (event.which) {
        case 49:
          this.externalExecute()
          break
        case 50:
          this.introjectExecute()
          break
        case 51:
          this.identifyExecute()
          break
        case 52:
          this.integrateExecute()
          break
      }
    })
  },
  methods: {
    externalCharge () {
      this.motivation.externalCharge()
    },
    externalExecute () {
      this.motivation.externalExecute()
    },
    introjectCharge () {
      this.motivation.introjectCharge()
    },
    introjectExecute () {
      this.motivation.introjectExecute()
    },
    identifyCharge () {
      this.motivation.identifyCharge()
    },
    identifyExecute () {
      this.motivation.identifyExecute()
    },
    integrateCharge () {
      this.motivation.integrateCharge()
    },
    integrateExecute () {
      this.motivation.integrateExecute()
    }
  }
}
</script>

<style lang="css">
@import '../assets/style.css';
</style>
