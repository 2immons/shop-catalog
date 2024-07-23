<script lang="ts">
import {defineComponent} from 'vue'
import CategoryItem from './CategoryItem.vue'
import {categoriesStore} from "@/store/category";

export default defineComponent({
  name: "CategoryFilter",
  components: { CategoryItem },
  computed: {
    categories() {
      const store = categoriesStore();
      return store.categories;
    }
  }
})
</script>

<template>
<div class="category-filter-wrapper">
  <CategoryItem
      v-for="category in categories"
      :key="category.id"
      :category="category"
  />
</div>

</template>

<style scoped lang="scss">
.category-filter-wrapper {
  width: 100%;
}
</style>