<script lang="ts">
import {defineComponent} from 'vue'
import CheckboxComponent from "@/components/CheckboxComponent.vue";

export default defineComponent({
  name: "CheckboxesList",
  components: { CheckboxComponent },
})
</script>

<template>
<div class="list">
  <CheckboxComponent />
  <CheckboxComponent />
  <CheckboxComponent />
  <CheckboxComponent />
</div>
</template>

<style scoped lang="scss">
.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
}
</style>