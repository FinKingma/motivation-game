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
            <hr align=left class='motivatorLine' v-bind:style="{ width: externalChargeValue + '%'}">
          </li>
          <li>
            <button @mousedown="introjectCharge" @mouseup="introjectExecute" @mouseleave="introjectExecute">2) Voer druk uit</button>
            <hr align=left class='motivatorLine' v-bind:style="{ width: introjectChargeValue + '%'}">
          </li>
          <li>
            <button @mousedown="identifyCharge" @mouseup="identifyExecute" @mouseleave="identifyExecute">3) Vraag het</button>
            <hr align=left class='motivatorLine' v-bind:style="{ width: identifyChargeValue + '%'}">
          </li>
          <li>
            <button @mousedown="integrateCharge" @mouseup="integrateExecute" @mouseleave="integrateExecute">4) Daag uit</button>
            <hr align=left class='motivatorLine' v-bind:style="{ width: integrateChargeValue + '%'}">
          </li>
        </ul>
        <h2>points: {{ motivationService.score }} </h2>
      </div>
      <div id='rightPane'>
        <img src='../assets/sarah.png' class='sarah-image' />
        <div class='internalization'>
          <div class='internalizationFill' v-bind:style="{ height: ( (1 - motivationService.internalization.value) * 100) + '%'}" />
          <p class='internalizationLabel'>internalization</p>
        </div>
        <img src='../assets/jij.png' class='jij-image' />
        <canvas id='canvasField' ref="canvasField" />
      </div>
    </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MotivationService } from '../modules/motivationService'

export default Vue.extend({
    data() {
        return {
            motivationService: new MotivationService(),
            externalChargeValue: 0,
            introjectChargeValue: 0,
            identifyChargeValue: 0,
            integrateChargeValue: 0
        }
    },
    beforeMount(){
        setInterval(this.automaticChargeUp, 25)
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
        shouldBeCharged (value:number) {
            return value > 0 && value < 100
        },
        automaticChargeUp () {
            if (this.shouldBeCharged(this.externalChargeValue)) {
                this.externalChargeValue++
            }
            if (this.shouldBeCharged(this.introjectChargeValue)) {
                this.introjectChargeValue++
            }
            if (this.shouldBeCharged(this.identifyChargeValue)) {
                this.identifyChargeValue++
            }
            if (this.shouldBeCharged(this.integrateChargeValue)) {
                this.integrateChargeValue++
            }
        },
        externalCharge () {
            this.externalChargeValue = 1
        },
        externalExecute () {
            if (this.externalChargeValue > 0) {
                this.motivationService.triggerExternal(this.externalChargeValue)
                this.externalChargeValue = 0
            }
        },
        introjectCharge () {
            this.introjectChargeValue = 1
        },
        introjectExecute () {
            if (this.introjectChargeValue > 0) {
                this.motivationService.triggerIntrojected(this.introjectChargeValue)
                this.introjectChargeValue = 0
            }
        },
        identifyCharge () {
            this.identifyChargeValue = 1
        },
        identifyExecute () {
            if (this.identifyChargeValue > 0) {
                this.motivationService.triggerIdentified(this.identifyChargeValue)
                this.identifyChargeValue = 0
            }
        },
        integrateCharge () {
            this.integrateChargeValue = 1
        },
        integrateExecute () {
            if (this.integrateChargeValue > 0) {
                this.motivationService.triggerIntegrated(this.integrateChargeValue)
                this.integrateChargeValue = 0
            }
        }
    },
    computed: {
        
    }
});
</script>

<style lang="css">
@import '../assets/style.css';
</style>
