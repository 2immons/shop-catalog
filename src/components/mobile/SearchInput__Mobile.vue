<script lang="ts">
import {defineComponent} from 'vue'
import SearchButton__Mobile from "@/components/mobile/SearchButton__Mobile.vue";

export default defineComponent({
  name: "SearchInput__Mobile",
  components: { SearchButton__Mobile }
})
</script>

<template>
<div class="search-wrapper">
  <div class="input-wrapper">
    <button class="back-btn">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M0.283445 10.6843C-0.0944816 10.3064 -0.0944816 9.69363 0.283445 9.3157L9.3157 0.283445C9.69363 -0.0944804 10.3064 -0.0944804 10.6843 0.283445C11.0622 0.661371 11.0622 1.27411 10.6843 1.65204L3.30408 9.03226L19.0323 9.03226C19.5667 9.03226 20 9.46553 20 10C20 10.5345 19.5667 10.9677 19.0323 10.9677L3.30408 10.9677L10.6843 18.348C11.0622 18.7259 11.0622 19.3386 10.6843 19.7166C10.3064 20.0945 9.69363 20.0945 9.3157 19.7166L0.283445 10.6843Z" fill="#333333"/>
      </svg>
    </button>
    <button class="clear-btn">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.3">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3334 10C18.3334 14.6024 14.6025 18.3333 10.0001 18.3333C5.39771 18.3333 1.66675 14.6024 1.66675 10C1.66675 5.39764 5.39771 1.66668 10.0001 1.66668C14.6025 1.66668 18.3334 5.39764 18.3334 10ZM13.0893 8.08927C13.4148 7.76383 13.4148 7.23619 13.0893 6.91076C12.7639 6.58532 12.2363 6.58532 11.9108 6.91076L10.0001 8.8215L8.08934 6.91076C7.7639 6.58532 7.23626 6.58532 6.91083 6.91076C6.58539 7.23619 6.58539 7.76383 6.91083 8.08927L8.82157 10L6.91083 11.9108C6.58539 12.2362 6.58539 12.7638 6.91083 13.0893C7.23626 13.4147 7.7639 13.4147 8.08934 13.0893L10.0001 11.1785L11.9108 13.0893C12.2363 13.4147 12.7639 13.4147 13.0893 13.0893C13.4148 12.7638 13.4148 12.2362 13.0893 11.9108L11.1786 10L13.0893 8.08927Z" fill="#333333"/>
        </g>
      </svg>
    </button>

    <input type="text" placeholder="Запрос">
  </div>
  <SearchButton__Mobile />
</div>
</template>

<style scoped lang="scss">
.search-wrapper {
  width: 100%;
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.input-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.back-btn {
  position: absolute;
  background: transparent;
  border: none;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.clear-btn {
  position: absolute;
  right: 8px;
  background: transparent;
  border: none;
  top: 50%;
  transform: translateY(-50%);
}

input {
  border: none;
  width: 100%;
  padding: 0 35px 0 30px;
  height: 100%;
}
</style>