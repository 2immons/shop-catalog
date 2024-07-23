<script lang="ts">
import { defineComponent } from 'vue';
import '../src/styles/main.scss'
import CatalogView from "@/views/CatalogView.vue";

export default defineComponent({
  components: {
    CatalogView
  }
});
</script>

<template>
  <div id="app">
    <CatalogView />
  </div>
</template>

<style lang="scss">
#app {
  max-width: 1720px;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  font-family: PT Sans, sans-serif;
  line-height: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media screen and (max-width: 1440px) {
  #app {
    max-width: 1240px;
  }
}

@media screen and (max-width: 800px) {
  #app {
    max-width: 375px;
  }
}
</style>
