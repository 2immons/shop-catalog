<script lang="ts">
import {defineComponent} from 'vue'
import ProductCard from "@/components/product_card/ProductCard.vue";
import {productsStore} from "@/store/product";

export default defineComponent({
  name: "CatalogComponent",
  components: {ProductCard},
  computed: {
    products() {
      const store = productsStore();
      return store.products;
    }
  }
})
</script>

<template>
  <div class="catalog">
    <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
    />
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
    margin-left: 0;
  }
}
</style>