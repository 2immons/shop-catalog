<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  name: "CheckboxComponent",
  props: {
    value: {
      type: [Number, String] as PropType<number | string>,
    }
  }
})
</script>

<template>
<label class="container">
  {{ value }}
  <input type="checkbox">
  <span class="checkmark"></span>
</label>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  height: 20px;
  align-items: center;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: var(--color-white);
  border: 1px solid var(--c-border);
  border-radius: 3px;
}

.container:hover input ~ .checkmark {
  border: 1px solid var(--c-brand);
}

.container input:checked ~ .checkmark {
  background-color: var(--c-btn-border);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 5px;
  top: 2px;
  width: 8px;
  height: 11px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
</style>