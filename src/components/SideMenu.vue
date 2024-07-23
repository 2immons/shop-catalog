<script lang="ts">
import {defineComponent} from 'vue'
import PriceFilter from "@/components/filters/PriceFilter.vue";
import SizeFilter from "@/components/filters/size/SizeFilter.vue";
import BrandFilter from "@/components/filters/brand/BrandFilter.vue";
import CategoryFilter from "@/components/filters/category/CategoryFilter.vue";

export default defineComponent({
  name: "SideMenu",
  components: {CategoryFilter, PriceFilter, SizeFilter, BrandFilter },
})
</script>

<template>
<div class="side-menu">
  <div class="side-menu-content">
    <CategoryFilter />
    <PriceFilter />
    <BrandFilter />
    <SizeFilter />
  </div>
</div>
</template>

<style scoped lang="scss">
.side-menu {
  width: 20%;
  gap: 30px;
  position: relative;
}

.side-menu-content {
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 10px;
  gap: 30px;
}

@media screen and (max-width: 800px) {
  .side-menu {
    display: none;
  }
}

</style>