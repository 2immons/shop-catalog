<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NotifyRestock"
})
</script>

<template>
  <button>Сообщить о поступлении</button>
</template>

<style scoped lang="scss">
button {
  cursor: pointer;
  width: 100%;
  height: 38px;
  border-radius: 4px;
  border: 1px solid var(--c-border);
  color: var(--c-font-second);
  background: transparent;
  padding: 0 5px;
  gap: 4px;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
}
</style>