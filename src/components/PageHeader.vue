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
      <div class="logo-wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H5ZM6 17H18L14.25 12L11.25 16L9 13L6 17Z" fill="#73AFF4"/>
        </svg>
        <p class="logo__text">Логотип</p>
      </div>
      <button>Каталог</button>
    </div>
    <div class="search-section">
      <SearchInput />
    </div>
    <div class="nav">
      <a>Информация о компании</a>
      <a>Контакты</a>
      <a>Полезные ссылки</a>
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

.logo-section {
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 25%;
}

.logo-wrapper {
  position: relative;
  height: 48px;
  padding: 0 10px;
  display: flex;
  align-items: center;
}

button {
  border: 1px solid var(--c-btn-border);
  border-radius: 8px;
  gap: 10px;
  height: 48px;
  padding: 8px 24px 8px 24px;
  background: white;
  line-height: 17px;
}

.search-section {
  height: 48px;
  width: 45%
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  width: 35%;
  font-size: 14px;
}

</style>