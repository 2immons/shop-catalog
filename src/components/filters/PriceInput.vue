<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PriceInput",
  data() {
    return {
      price: ''
    }
  },
  methods: {
    handleInput(event: Event) {
      const target = event.target as HTMLInputElement
      const value = target.value
          .replace(/ ₽/g, '')
          .replace(/₽/g, '')
      this.price = value ? `${value} ₽` : ''
      target.value = this.price
    }
  }
})
</script>

<template>
  <div class="price-input-wrapper">
    <input
        type="text"
        v-model="price"
        @input="handleInput"
    >
    <span class="input__text">от</span>
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
  padding: 0 10px 0 20px;
  height: 100%;
  font-size: 14px;
  line-height: 16px;
}

input:focus {
  outline: 1px solid var(--c-brand);
}

.input__text {
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--c-font-second);
  font-size: 12px;
  line-height: 14px;
}
</style>