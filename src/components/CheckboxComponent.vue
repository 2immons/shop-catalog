<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CheckboxComponent"
})
</script>

<template>
<label class="container">
  Аттрибут
  <input type="checkbox" checked="checked">
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
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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
  background-color: #eee;
}

.container:hover input ~ .checkmark {
  background-color: var(--c-border);
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
  left: 7px;
  top: 2px;
  width: 8px;
  height: 11px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>