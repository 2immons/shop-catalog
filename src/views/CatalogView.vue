<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from "@/components/PageHeader.vue";
import CatalogComponent from "@/components/CatalogComponent.vue";
import SideMenu from "@/components/SideMenu.vue";
import PageHeader__Mobile from "@/components/mobile/PageHeader__Mobile.vue";

export default defineComponent({
  name: "CatalogView",
  components: {
    SideMenu,
    PageHeader,
    CatalogComponent,
    PageHeader__Mobile
  }
});
</script>

<template>
  <div class="catalog-view">
    <PageHeader />
    <PageHeader__Mobile />
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
