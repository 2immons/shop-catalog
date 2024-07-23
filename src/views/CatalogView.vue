<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from "@/components/header/PageHeader.vue";
import CatalogComponent from "@/components/CatalogComponent.vue";
import SideMenu from "@/components/SideMenu.vue";
import PageHeader__Mobile from "@/components/mobile_header/PageHeader__Mobile.vue";

export default defineComponent({
  name: "CatalogView",
  components: {
    SideMenu,
    PageHeader,
    CatalogComponent,
    PageHeader__Mobile
  },
  data () {
    return {
      isMobile: false
    }
  },
  methods: {
    checkScreenWidth() {
      this.isMobile = window.innerWidth <= 800
    }
  },
  mounted() {
    this.checkScreenWidth()
    window.addEventListener('resize', this.checkScreenWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenWidth)
  }
});
</script>

<template>
  <div class="catalog-view">
    <PageHeader v-if="!this.isMobile"/>
    <PageHeader__Mobile v-if="this.isMobile"/>
    <main>
      <SideMenu />
      <CatalogComponent />
    </main>
  </div>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

</style>
