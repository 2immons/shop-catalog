<script lang="ts">
import {defineComponent} from 'vue'
import FilterSearch from "@/components/filters/FilterSearch.vue";
import CheckboxesList from "@/components/CheckboxesList.vue";
import ClearButton from "@/components/buttons/ClearButton.vue";

export default defineComponent({
  name: "CategoryFilter",
  components: {ClearButton, CheckboxesList, FilterSearch }
})
</script>

<template>
<div class="brand-filter-wrapper">
  <div class="category-header">
    <p>Бренд</p>
    <ClearButton />
  </div>
  <FilterSearch />
  <CheckboxesList />
</div>
</template>

<style scoped lang="scss">
.brand-filter-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.category-header{
  display: flex;
  justify-content: space-between;
}

p {
  font-weight: 700;
}
</style>