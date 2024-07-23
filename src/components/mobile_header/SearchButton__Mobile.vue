<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SearchButton__Mobile"
})
</script>

<template>
<button>Найти</button>
</template>

<style scoped lang="scss">
button {
  border-radius: 5px;
  background: var(--c-brand);
  padding: 12px;
  height: 38px;
  gap: 10px;
  color: var(--color-white);
  border: none;
}
</style>