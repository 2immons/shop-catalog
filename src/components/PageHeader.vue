<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PageHeader"
})
</script>

<template>
  <header class="header">
    <div class="logo-section">
      <div class="logo-wrapper"></div>
      <button>Каталог</button>
    </div>
    <div class="search-section"></div>
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
  justify-content: space-around;

}

</style>