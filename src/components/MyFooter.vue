<template>
  <div class="container-fluid my-footer">
      <!-- <div class="container"> -->
            &copy; 2020 - Renzo Carara
      <!-- </div> -->
  </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
@import "@/sass/app.scss";

.my-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: $white-color;
    background-color: $secondary-color;
    text-align: center;
}
</style>
