<template>
<div>
    <transition  name="fade" mode="out-in">
        <div key="table-full" v-if="!isGameCompleted" class="d-flex justify-content-around flex-wrap game-table">   
             <card-box v-for="(card, index) in cards"
                :key="index"
                :card="card">
             </card-box>
        </div>
        <!-- il componente che segue viene renderizzato quando la partita è finita -->
        <div key="table-empty" v-else class="d-flex justify-content-around flex-wrap game-table game-over"><h1>GAME OVER!</h1></div>
    </transition>
</div>
</template>

<script>
import CardBox from "@/components/CardBox.vue";

import { mapGetters } from "vuex";

export default {
    name: "GameTable",
    components: {
        CardBox
    },
    methods: {
        // questi metodi accedono tramite "commit" ad un metodo dello Store
        // cioè sto commitando una "mutation" (che agisce su un dato dello store)
        // metodo_x() {
        //     this.$store.commit("mutation_x_dello_store");
        // },
    },
    computed: {
        // mappo dei getters definiti nello Store per renderli disponibili a questo componenete
        // ...mapGetters(["getGameTable"])
        ...mapGetters({
            // per una migliore leggibilità mappo il getter `this.$store.getters.getGameTable` associandolo al nome 'cards'
            cards: "getGameTable",
            getGameCompleted: "getGameCompleted"
        }),
        isGameCompleted() {
            // questa è a tutti gli effetti una proprietà, per cui viene richiamata con la notazione "senza" parentesi tonde
            return this.getGameCompleted;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/sass/app.scss";

.game-table {
    padding: 5px 0;
    background-color: lighten($primary-color, 7%);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid $red-color;
}

@media screen and (min-width: 768px) {
    .game-table {
        padding: 5px 45px;
    }
}

@media screen and (min-width: 992px) {
    .game-table {
        padding: 5px 125px;
    }
}
@media screen and (min-width: 1200px) {
    .game-table {
        padding: 5px 220px;
    }
}
</style>
