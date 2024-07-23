<script lang="ts">
import {defineComponent} from 'vue'
import PriceInput from "@/components/filters/PriceInput.vue";

export default defineComponent({
  name: "PriceFilter",
  components: { PriceInput },
})
</script>

<template>
<div class="size-filter-wrapper">
  <div class="title">
    <p>Цена</p>
  </div>
  <div class="list-section">
    <PriceInput />
    <div class="gap-dot"></div>
    <PriceInput />
  </div>
</div>
</template>

<style scoped lang="scss">
.size-filter-wrapper {
  display: flex;
  flex-direction: column;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 700;
  margin-bottom: 16px;
}

.list-section {
  display: grid;
  width: 100%;
  grid-template-columns: 4fr 1fr 4fr;
  align-items: center;
}

.gap-dot {
  margin: 0 5px 0 5px;
  height: 1px;

  background: var(--c-border);
}
</style>