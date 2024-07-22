<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BuyButton"
})
</script>

<template>
<button>Купить</button>
</template>

<style scoped lang="scss">
button {
  width: 75px;
  height: 38px;
  border-radius: 4px;
  border: 1px solid var(--c-btn-border);
  color: var(--c-btn-border);
  background: transparent;
  padding: 12px 16px 12px 16px;
  gap: 4px;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
}
</style>