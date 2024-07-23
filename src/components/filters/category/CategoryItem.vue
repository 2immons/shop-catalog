<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CategoryItem"
})
</script>

<template>
<button>
  Название категории
  <span>3</span>
</button>
</template>

<style scoped lang="scss">
button {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  border: none;
  font-weight: 400;
  font-size: 14px;
}
</style>