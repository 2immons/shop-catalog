<script lang="ts">
import {defineComponent} from 'vue'
import SearchInput__Mobile from "@/components/mobile_header/SearchInput__Mobile.vue";

export default defineComponent({
  name: "PageHeader__Mobile",
  components: { SearchInput__Mobile }
})
</script>

<template>
  <header class="header--mobile">
    <SearchInput__Mobile />
  </header>

</template>

<style scoped lang="scss">
.header--mobile {
  height: 55px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--c-border);
}
</style>