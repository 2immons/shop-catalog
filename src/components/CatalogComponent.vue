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
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 372px);
  column-gap: 16px;
  row-gap: 40px;
}
</style>