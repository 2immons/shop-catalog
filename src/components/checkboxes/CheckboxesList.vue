<script lang="ts">
import {defineComponent, PropType} from 'vue'
import CheckboxComponent from "@/components/checkboxes/CheckboxComponent.vue";

export default defineComponent({
  name: "CheckboxesList",
  components: { CheckboxComponent },
  data () {
    return {

    }
  },
  props: {
    items: {
      type: Array as PropType<Array<{ id: number; value: string | number }>>,
    }
  }
})
</script>

<template>
<div class="list">
  <CheckboxComponent
      v-for="item in items"
      :key="item.id"
      :value="item.value"
  />
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