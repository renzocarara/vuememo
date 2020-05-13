<template>
        <div class="">
             <game-table></game-table>
             <control-panel></control-panel>
        </div> 
</template>

<script>
// @ is an alias to /src
import GameTable from "@/components/GameTable.vue";
import ControlPanel from "@/components/ControlPanel.vue";

// import { mapState } from "vuex";
// import { mapGetters } from "vuex";

export default {
    name: "HomePage",
    components: {
        GameTable,
        ControlPanel
    },
    methods: {
        //
        // questi metodi accedono tramite "commit" ad un metodo dello Store
        // cioè sto commitando una "mutation" (che agisce su un dato dello store)
        // increment() {
        //     this.$store.commit("increment");
        // },
    },
    computed: {
        // ...mapGetters(["getGameTable"])
        // ...mapState(["counter", "prop_text", "prop_c", "my_flag"]),
        // computedCount() {
        // return this.$store.state.counter;
        // }
    }
};
</script>

<style lang="scss" scoped>
@import "@/sass/app.scss";

.home-page {
    border: 2px solid yellow;
    // background-color: bisque;
    // color: black;
}
</style>
