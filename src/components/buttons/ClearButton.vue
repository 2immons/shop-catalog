<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ClearButton",
  emits: ['select-cleared'],
})
</script>

<template>
<button>
  Очистить
</button>
</template>

<style scoped lang="scss">
button {
  font-size: 12px;
  line-height: 12px;
  color: var(--c-font-second);
  border: none;
  text-decoration: underline;
  background: transparent;
}

button:hover {
  color: var(--c-font-main)
}
</style>