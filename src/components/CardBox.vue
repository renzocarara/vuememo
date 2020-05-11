<template>
  <div class="cardbox">
    <div class="d-flex h-100 justify-content-center align-content-center flex-column">
        <transition name="bounce" mode="out-in">
            <img v-if="isUncoveredCard" key="open" class="uncovered-card h-100 img-box" :src="imgPath" alt="card">
            <img v-else-if="isCoveredCard" key="closed"  @click="handleClick();" class="covered-card h-100 img-box clickable" :src="coverPath" alt="copertina della card">
            <img v-else key="removed" class="h-100 img-box" :src="checkedPath" alt="checked card">
        </transition>
    </div>
  </div>
</template>

<script>
import { CARD_OPEN, CARD_CLOSED } from "@/const.js";

import { mapGetters, mapMutations } from "vuex";
// import { mapState } from "vuex";

export default {
    name: "CardBox",
    data() {
        return {
            // NOTA con "this.$vnode.key" riesco ad accedere alla props key (che è una props riservata di Vue)
            // è l'indice del v-for quando il componente "CardBox" viene renderizzato dal componente padre
            index: this.$vnode.key
        };
    },
    // parametri in ingresso, ricevuti dal componente quando viene richiamato
    props: {
        // oggetto che contiene 2 proprietà: l'id della card da renderizzare e lo status
        card: Object
    },
    methods: {
        ...mapMutations([
            "incrementTotalClicks",
            "setCardOpen",
            "incrementOpenClicks",
            "resetOpenClicks",
            "setCardClosed",
            "setCardRemoved"
        ]),
        ...mapGetters(["getOpenClicks"]),

        handleClick() {
            // DESCRIZIONE:
            // gestisce tutte le operazioni da eseguire dopo un click su di una card, considera 3 casi:
            // 1. ci sono già 2 card aperte, ignora il click dell'utente, non fa nulla
            // 2. c'è una sola card aperta, controlla se la card cliccata matcha con quella già aperta
            // 3. non ci sono card aperte, scopre la card cliccata

            if (!this.areTwoCardsOpen) {
                // solo se non ci sono già 2 cards aperte faccio qualcosa
                let self = this; // mi salvo il riferimento di questa funzione

                // console.log("posizione card:", this.index);

                this.setCardOpen(this.index); // setto lo status della card appena cliccata a "CARD_OPEN"
                this.incrementTotalClicks(); // incremento il numero totale di clicks
                // console.log("aperto card n.", this.index);

                if (this.isOneCardOpen) {
                    // c'è già un'altra card scoperta sulla GameTable
                    // console.log("1 card era già aperta");

                    // setto openClicks a 2 ad indicare che ora 2 cards sono scoperte
                    this.incrementOpenClicks();

                    let table = this.getGameTable; // recupero la GameTable con tutte le cards
                    // ricavo le posizioni (indici) e gli id delle 2 carte scoperte
                    let coupledCards = [];
                    for (let i = 0; i < table.length; i++) {
                        if (table[i].status == CARD_OPEN) {
                            let indexAndId = { index: i, id: table[i].id };
                            coupledCards.push(indexAndId);
                        }
                    }
                    // console.log("coupledCards", coupledCards);

                    if (coupledCards[0].id == coupledCards[1].id) {
                        // le 2 cards matchano, le rimuovo
                        setTimeout(function() {
                            self.setCardRemoved(coupledCards[0].index);
                            self.setCardRemoved(coupledCards[1].index);
                            // le 2 cards sono state rimosse, resetto il conteggio degli openClicks
                            self.resetOpenClicks(); // setto openClicks a zero
                        }, 800);
                    } else {
                        // le 2 cards non matchano
                        // copro le 2 cards che erano scoperte
                        setTimeout(function() {
                            self.setCardClosed(coupledCards[0].index);
                            self.setCardClosed(coupledCards[1].index);
                            // le 2 cards sono state coperte nuovamente, resetto il conteggio degli openClicks
                            self.resetOpenClicks(); // setto openClicks a zero
                        }, 1000);
                    }
                } else {
                    // non ci sono carte già scoperte sulla GameTable
                    // console.log("è la prima carta che scopro");

                    // setto openClicks a 1 ad indicare che una card è ora scoperta
                    this.incrementOpenClicks();
                }
            }
        }
    },
    computed: {
        // mappo i getters definiti nello Store per renderli disponibili a questo componenente
        ...mapGetters(["getTheme", "getCardStatus", "getGameTable"]),

        imgPath() {
            // path per recuperare l'immagine di contenuto della card
            return (
                "assets/images/" + this.getTheme + "/" + this.card.id + ".png"
            );
        },
        coverPath() {
            // path per recuperare l'immagine di copertina della card
            return "assets/images/" + this.getTheme + "/" + "cover.png";
        },
        checkedPath() {
            // path per recuperare l'immagine per una card rimossa
            return "assets/images/" + this.getTheme + "/" + "checked.png";
        },
        isUncoveredCard() {
            return this.getCardStatus(this.index) == CARD_OPEN;
        },
        isCoveredCard() {
            return this.getCardStatus(this.index) == CARD_CLOSED;
        },
        isOneCardOpen() {
            return this.getOpenClicks() == 1;
        },
        areTwoCardsOpen() {
            return this.getOpenClicks() == 2;
        }
    }
};
</script>

<style scoped lang="scss">
@import "@/sass/app.scss";

.cardbox {
    width: 63px;
    height: 63px;
    margin: 4px;
    border-radius: 10px;
    background-color: $white-color;
}

.img-box {
    object-fit: contain;
    border-radius: 10px;
    border: 2px solid $black-color;
}
.clickable {
    cursor: pointer;
}
//

// .uncovered-card {
//     animation: fad 1s linear;
// }
// @keyframes fad {
//     0% {
//         opacity: 0;
//     }
// }
// --------------------------- ANIMATIONs -----------------------------------

.bounce-enter-active:not(.covered-card):not(.uncovered-card) {
    animation: bounce-in 0.5s;
}
// non applico la animation all'elemento ".covered-card" in uscita, in modo che sparisca subito
// e non possa essere cliccato una seconda volta, durante la animation
.bounce-leave-active:not(.covered-card):not(.uncovered-card) {
    animation: bounce-in 0.5s;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
        opacity: 0.3;
    }
}
//
//
// ---------------------------- MEDIA QUERIES ----------------------------------
@media screen and (min-width: 388px) {
    .cardbox {
        width: 75px;
        height: 75px;
    }
}
@media screen and (min-width: 445px) {
    .cardbox {
        width: 90px;
        height: 90px;
    }
}
@media screen and (min-width: 520px) {
    .cardbox {
        width: 112px;
        height: 112px;
    }
}
@media screen and (min-width: 768px) {
    .cardbox {
        width: 130px;
        height: 130px;
    }
}
</style>
