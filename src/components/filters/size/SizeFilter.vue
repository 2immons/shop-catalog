<script lang="ts">
import {defineComponent} from 'vue'
import FilterSearch from "@/components/filters/FilterSearch.vue";
import CheckboxesList from "@/components/checkboxes/CheckboxesList.vue";
import ClearButton from "@/components/buttons/ClearButton.vue";
import {sizesStore} from "@/store/size";

export default defineComponent({
  name: "CategoryFilter",
  components: {ClearButton, CheckboxesList, FilterSearch },
  computed: {
    sizes() {
      const store = sizesStore();
      return store.sizes;
    }
  }

})
</script>

<template>
  <div class="brand-filter-wrapper">
    <div class="category-header">
      <p>Размер</p>
    </div>
    <CheckboxesList :items="sizes"/>
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
  justify-content: center;
}

p {
  font-weight: 700;
}
</style>