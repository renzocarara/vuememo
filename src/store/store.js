import Vue from "vue";
import Vuex from "vuex";
import { CARD_OPEN, CARD_CLOSED, CARD_REMOVED } from "@/const.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        gameTable: [], // è un array di oggetti che indica stato e posizione delle cards sulla GameTable
        // ogni card ha un ID numerico, lo stato della card: CARD_CLOSED(0), CARD_OPEN(1) o CARD_REMOVED(2)
        theme: "mix", // è una stringa che indica il tema corrente
        totalClicks: 0, // è il numero totale di clicks effettuati dall'utenete durante una partita
        openClicks: 0, // numero corrente di cards scoperte (può valere 0, 1 o 2)
        gameCompleted: false,
    },
    getters: {
        getGameTable(state) {
            return state.gameTable;
        },
        getCardStatus(state) {
            // questo getter riceve un parametro in ingresso (index)
            // NOTA: uso la notazione "arrow function" di ES6
            // in pratica il getter ritorna (1° return) una funzione anonima che riceve in ingresso il parametro index
            // questa funzione anonima a sua volta ritorna (2° return) lo status dell'elemento della GameTable indicizzato da "index"
            return (index) => {
                // console.log("staus:", state.gameTable[index].status);

                return state.gameTable[index].status;
            };
        },
        getTheme(state) {
            return state.theme;
        },
        getTotalClicks(state) {
            // console.log("totalClicks", state.totalClicks);
            return state.totalClicks;
        },
        getOpenClicks(state) {
            // console.log("openClicks è", state.openClicks);
            return state.openClicks; // ritorna 0, 1 o 2
        },
        getGameCompleted(state) {
            return state.gameCompleted;
        },
    },
    mutations: {
        initGameTable(state, newGameTable) {
            // riceve in input un array che rappresenta la distribuzione e lo stato delle cards sulla GameTable
            state.gameTable = newGameTable;
        },
        setTheme(state, newTheme) {
            // riceve in input una stringa che corrisponde al tema selezionato dall'utente
            state.theme = newTheme;
        },
        incrementTotalClicks(state) {
            // incrementa il conteggio totale dei clicks dell'utente
            state.totalClicks++;
        },
        resetTotalClicks(state) {
            // azzera il conteggio totale dei clicks dell'utente
            state.totalClicks = 0;
        },
        setCardOpen(state, index) {
            // console.log("card_id:", state.gameTable[index].id);
            state.gameTable[index].status = CARD_OPEN;
        },
        setCardClosed(state, index) {
            state.gameTable[index].status = CARD_CLOSED;
        },
        setCardRemoved(state, index) {
            state.gameTable[index].status = CARD_REMOVED;
        },
        incrementOpenClicks(state) {
            state.openClicks++;
            // console.log("openClicks diventa", state.openClicks);
        },
        resetOpenClicks(state) {
            // azzera il conteggio dei clicks aperti
            state.openClicks = 0;
        },
        setGameCompleted(state, status) {
            state.gameCompleted = status;
        },
    },
    //commits the mutation, it's asynchronous
    actions: {},
});
