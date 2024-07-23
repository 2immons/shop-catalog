<script lang="ts">
import {defineComponent} from 'vue'
import CategoryItem from './CategoryItem.vue'

export default defineComponent({
  name: "CategoryFilter",
  components: {CategoryItem }
})
</script>

<template>
<div class="category-filter-wrapper">
  <CategoryItem />
  <CategoryItem />
  <CategoryItem />
  <CategoryItem />
</div>

</template>

<style scoped lang="scss">
.category-filter-wrapper {
  width: 100%;
}
</style>