<template>
  <div class="my-page-min-h d-flex justify-content-center align-content-center flex-column">
    <div>
        <h4>Questa è un esercizio sull'utilizzo di <span class="vuex-text">Vuex</span>.</h4>
            <p>L'applicazione utilizza:</p>
            <p class="d-flex justify-content-center align-content-center">
                <ul class="text-left">
                  <li><strong>scaffold di Vue CLI 3</strong></li>
                  <li><strong>routing vue-router</strong></li>
                  <li><strong>stile di Bootstrap 4.</strong></li>
                </ul>
            </p>
    </div>
  </div>
</template>

<script>
export default {
    name: "About"
};
</script>

<style lang="scss" scoped>
@import "../sass/app.scss";

// .about {
//     background-image: #{$bcg-app-color};
// }
.vuex-text {
    font-weight: bold;
    color: $secondary-color;
}
</style>


