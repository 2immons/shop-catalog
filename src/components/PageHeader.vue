<script lang="ts">
import {defineComponent} from 'vue'
import SearchInput from "@/components/SearchInput.vue";

export default defineComponent({
  name: "PageHeader",
  components: {
    SearchInput
  }
})
</script>

<template>
  <header class="header">
    <div class="logo-section">
      <div class="logo-wrapper"></div>
      <button>Каталог</button>
    </div>
    <div class="search-section">
      <SearchInput />
    </div>
    <div class="nav">
      <div class="nav__info">
        <a>Информация о компании</a>
        <a>Контакты</a>
        <a>Полезные ссылки</a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  height: 72px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0 12px 0;
}

.search-section {
  height: 100%;
}

</style>