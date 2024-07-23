<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SaleLabel"
})
</script>

<template>
<span>
  25%
</span>
</template>

<style scoped lang="scss">
span {
  position: absolute;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 1px 5px;
  color: var(--color-white);
  justify-content: center;
  background: var(--c-brand);
  border-radius: 4px;
  font-weight: 700;
  bottom: 10px;
  left: 10px;
}
</style>