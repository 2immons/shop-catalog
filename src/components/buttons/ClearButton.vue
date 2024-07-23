<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ClearButton"
})
</script>

<template>
<button>
  Очистить
</button>
</template>

<style scoped lang="scss">
button {
  border: none;
  text-decoration: underline;
  background: transparent;
}
</style>