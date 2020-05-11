<template>
  <div id="app" class="appclass">
      <div class="container">
              <h1 class="mb-0 pt-2">MemoVue</h1>
              <div class="" id="nav">
                  <router-link to="/">Home</router-link> |
                  <router-link to="/instructions">Instructions</router-link> |
                  <router-link to="/about">About</router-link>
              </div>
              <transition name="fade" mode="out-in" appear>
                 <router-view />
              </transition>
              <my-footer></my-footer>
      </div>
  </div>
</template>


<script>
import MyFooter from "@/components/MyFooter.vue";

export default {
    name: "App",
    components: {
        MyFooter
    }
};
</script>

<style lang="scss" scoped>
@import "@/sass/app.scss";

.appclass {
    min-height: 100vh;
    background-image: #{$bcg-app-color};
    color: $white-color;
    padding-bottom: 20px;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#nav {
    padding-bottom: 10px;
    a {
        font-weight: bold;
        color: $white-color;

        &.router-link-exact-active {
            color: $red-color;
            text-decoration: none;
            cursor: default;
        }
        &:hover {
            color: $red-color;
            text-decoration: none;
        }
    }
}
</style>
