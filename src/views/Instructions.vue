<template>
  <div class="my-page-min-h d-flex justify-content-center align-content-center flex-column">
    <div>
        <h4>Note sul gioco</h4>
            <p>L'applicazione è una versione basica del gioco noto come <a target="_blank" href="https://it.wikipedia.org/wiki/Memoria_(gioco)">"Memory"</a>.<br>
            Lo scopo è accoppiare tutte le 16 card con il numero più basso di tentativi.<br>
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

a {
    color: $red-color;

    &:hover {
        color: $white-color;
        text-decoration: none;
    }
}
</style>


