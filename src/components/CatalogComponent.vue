<script lang="ts">
import {defineComponent} from 'vue'
import ProductCard from "@/components/product_card/ProductCard.vue";

export default defineComponent({
  name: "CatalogComponent",
  components: {ProductCard},
})
</script>

<template>
  <div class="catalog">
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
  </div>
</template>

<style scoped lang="scss">
.catalog {
  width: 80%;
  margin-left: 3%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 372px);
  column-gap: 16px;
  row-gap: 40px;
}

@media screen and (max-width: 800px) {
  .catalog {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }
}
</style>