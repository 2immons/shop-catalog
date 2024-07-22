<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from "@/components/PageHeader.vue";
import CatalogComponent from "@/components/CatalogComponent.vue";
import SideMenu from "@/components/SideMenu.vue";

export default defineComponent({
  name: "CatalogView",
  components: {
    SideMenu,
    PageHeader, CatalogComponent
  }
});
</script>

<template>
  <div class="catalog-view">
    <PageHeader />
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
