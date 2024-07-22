<script lang="ts">
import {defineComponent} from 'vue'
import CategoryFilter from './CategoryFilter.vue'

export default defineComponent({
  name: "CategoryFilter",
  components: { CategoryFilter }
})
</script>

<template>
<div class="category-filter-wrapper">
  <CategoryFilter />
  <CategoryFilter />
  <CategoryFilter />
  <CategoryFilter />
</div>

</template>

<style scoped lang="scss">

</style>