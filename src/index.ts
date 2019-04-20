import Vue from "vue";
import MotivationGame from "./components/MotivationGame.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <motivation-game />
        </div>
    `,
    components: {
        MotivationGame
    }
});
