<script lang="ts">
import {defineComponent} from 'vue'
import FilterSearch from "@/components/filters/FilterSearch.vue";
import CheckboxesList from "@/components/checkboxes/CheckboxesList.vue";
import ClearButton from "@/components/buttons/ClearButton.vue";
import {brandsStore} from "@/store/brand";

export default defineComponent({
  name: "CategoryFilter",
  components: {ClearButton, CheckboxesList, FilterSearch },
  computed: {
    brands() {
      const store = brandsStore();
      return store.brands

    }
  }
})
</script>

<template>
<div class="brand-filter-wrapper">
  <div class="category-header">
    <p>Бренд</p>
    <ClearButton />
  </div>
  <FilterSearch />
  <CheckboxesList :items="this.brands" />
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