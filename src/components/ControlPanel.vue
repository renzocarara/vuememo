<template>
    <div class="control-panel clearfix">
        <button class="btn-restart float-right" @click="initGame">Restart</button>
        <div class="theme-selector mr-2 float-left">
            <label class="theme-label" for="">Theme: </label><br>
            <select @change="selectTheme" v-model="theme">
                <option value="mix">Mix</option>
                <option value="pugs">Pugs</option>
                <option value="logos">Logos</option>
            </select>
        </div>
        <div class="score-box float-left">
            <span>Clicks: </span><br>
            <span class="score">{{ getTotalClicks }}</span>
        </div>
        <!-- <div class="timer-box float-left">
            <span>Timer:</span>
            <span class="timer"></span>
        </div> -->
    </div>
</template>


<script>
import { GAMETABLE_SIZE, CARD_CLOSED } from "@/const.js";

import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
// import { mapState } from "vuex";

export default {
    name: "ControlPanel",
    data() {
        return {
            theme: this.$store.getters.getTheme // leggo il tema corrente
        };
    },
    mounted() {
        // inizializzo il gioco eseguendo il metodo locale "initGame"
        this.initGame();
    },
    methods: {
        ...mapMutations([
            "initGameTable",
            "setTheme",
            "resetTotalClicks",
            "resetOpenClicks",
            "setGameCompleted"
        ]),
        // ...mapState(["gameTableSize", "cardClosed", "cardOpen", "cardRemoved"]),

        selectTheme() {
            this.setTheme(this.theme);
        },

        initGame() {
            // DESCRIZIONE:
            // inizializza il gioco per una nuova partita

            // chiamo una mutation per inizializzare la GameTable, gli passo una nuova GameTable generata da un metodo locale (mixAndReset)
            this.initGameTable(this.mixAndReset());
            // azzero contatori clicks
            this.resetTotalClicks();
            // azzero openClicks
            this.resetOpenClicks();
            // resetto flag di fine gioco
            this.setGameCompleted(false);

            // azzero timer
        },
        mixAndReset() {
            //DESCRIZIONE:
            // crea una array di "size" elementi sono degli oggetti ognuno dei quali corrisponde ad una card
            // ogni oggetto ha 2 info: id e status della card
            // gli id sono coppie di numeri che vanno da 0 a (size/2)-1, distribuite randomicamente nell'array
            // esempio: size=12, creo sei coppie di numeri uguali che vanno da 0 a 5,
            // distribuiti randomicamente nell'array di 12 elementi: [3, 2, 4 ,5 ,2, 1, 0, 5, 1, 4, 3, 0]

            let min = 0,
                max = GAMETABLE_SIZE - 1,
                ids = [],
                gameTable = [];

            while (ids.length < GAMETABLE_SIZE) {
                // genero i numeri tra 0 e GAMETABLE_SIZE-1 e li distribuisco a caso nell'array
                let randomNum =
                    Math.floor(Math.random() * (max - min + 1)) + min;
                // se non è già stato generato, lo pusho nell'array
                if (!ids.includes(randomNum)) {
                    ids.push(randomNum);
                }
            }

            // modifico l'array in modo da ottenere delle coppie di numeri uguali
            // (2 zeri, 2 uno, 2 due ...)
            // es. con GAMETABLE_SIZE=16, accoppio 0 con 8, 1 con 9, 2 con 10, etc
            for (let i = 0; i < ids.length; i++) {
                // ids[i] = Math.floor(ids[i] / 2); // alternativa alla linea scritta sotto
                ids[i] > GAMETABLE_SIZE / 2 - 1
                    ? (ids[i] -= GAMETABLE_SIZE / 2)
                    : null;
            }

            // creo l'array finale di oggetti
            for (let i = 0; i < GAMETABLE_SIZE; i++) {
                // stato delle cards (0=coperta, 1=scoperta, 2=eliminata)
                let card = { status: CARD_CLOSED, id: ids[i] };
                gameTable.push(card);
            }

            // ritorno un array di oggetti, ogni oggetto corrisponde a una card, con 2 proprietà: l'id e lo status
            return gameTable;
        }
    },
    computed: {
        ...mapGetters(["getTotalClicks"])
    }
};
</script>

<style lang="scss" scoped>
@import "@/sass/app.scss";

.control-panel {
    font-weight: bold;
    color: $white-color;
    background-color: $primary-color;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid $red-color;
    border-top: none;
    margin-bottom: 5px;
}
.btn-restart {
    font-weight: bold;
    color: $white-color;
    background-color: $red-color;
    border-radius: 5px;
    border: 1px solid $red-color;
    margin: 20px 8px 8px 4px;
}

.theme-selector {
    margin-bottom: 8px;
    margin-left: 8px;
}
.score {
    font-weight: bold;
    background-color: $white-color;
    color: black;
    border-radius: 5px;
    border: 1px solid $red-color;
    padding: 0px 8px 2px 8px;
}

select {
    border-radius: 5px;
    border: 1px solid $red-color;
}

.theme-label {
    margin: 0;
}

.score-box {
    margin-left: 10px;
}

// .timer-box {
//     margin-left: 10px;
// }
// .timer {
//     font-weight: bold;
// }
</style>
