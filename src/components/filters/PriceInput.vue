<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PriceInput"
})
</script>

<template>
  <div class="price-input-wrapper">
    <input type="number">
    <div class="input__text">от</div>
  </div>
</template>

<style scoped lang="scss">
.price-input-wrapper {
  position: relative;
  width: 100%;
  height: 36px;
}

input {
  width: 100%;
  border: 1px solid var(--c-border);
  border-radius: 4px;
  padding: 0 10px 0 25px;
  height: 100%;
}

.input__text {
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
}
</style>