<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SearchInput",
  data () {
    return {
      searchText: ''
    }
  }
})
</script>

<template>
<div class="input-wrapper">
  <input type="text" v-model="searchText" placeholder="Поиск по 100 000 товарам">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#5A5A5A"/>
  </svg>
  <button class="clear-btn" v-if="searchText !== ''" @click="searchText = ''">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.3">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3334 10C18.3334 14.6024 14.6025 18.3333 10.0001 18.3333C5.39771 18.3333 1.66675 14.6024 1.66675 10C1.66675 5.39764 5.39771 1.66668 10.0001 1.66668C14.6025 1.66668 18.3334 5.39764 18.3334 10ZM13.0893 8.08927C13.4148 7.76383 13.4148 7.23619 13.0893 6.91076C12.7639 6.58532 12.2363 6.58532 11.9108 6.91076L10.0001 8.8215L8.08934 6.91076C7.7639 6.58532 7.23626 6.58532 6.91083 6.91076C6.58539 7.23619 6.58539 7.76383 6.91083 8.08927L8.82157 10L6.91083 11.9108C6.58539 12.2362 6.58539 12.7638 6.91083 13.0893C7.23626 13.4147 7.7639 13.4147 8.08934 13.0893L10.0001 11.1785L11.9108 13.0893C12.2363 13.4147 12.7639 13.4147 13.0893 13.0893C13.4148 12.7638 13.4148 12.2362 13.0893 11.9108L11.1786 10L13.0893 8.08927Z" fill="#333333"/>
      </g>
    </svg>
  </button>
</div>
</template>

<style scoped lang="scss">
.input-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

input {
  border: 1px solid var(--c-brand);
  border-radius: 10px;
  height: 100%;
  gap: 8px;
  padding: 8px 20px 8px 50px;
  width: 100%;
}

input:focus {
  outline: 1px solid var(--c-brand);
}

svg {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
}

.clear-btn {
  position: absolute;
  right: 45px;
  background: transparent;
  border: none;
  top: 50%;
  transform: translateY(-50%);
}
</style>