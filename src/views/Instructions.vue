<template>
  <div class="d-flex justify-content-center align-content-center flex-column">
    <div>
        <h4>Note sul gioco</h4>
            <p>L'applicazione è una versione basica del gioco noto come <a target="_blank" href="https://it.wikipedia.org/wiki/Memoria_(gioco)">"Memory"</a>.<br>
            Lo scopo è accoppiare tutte le 16 card con il minor numero di tentativi.<br>
            </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../sass/app.scss";

a {
    color: $red-color;

    &:hover {
        color: $white-color;
        text-decoration: none;
    }
}
</style>


