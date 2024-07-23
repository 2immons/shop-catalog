<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface Category {
  id: number;
  name: string;
  quantity: number;
  subCategories: {
    id: number;
    name: string;
    quantity: number;
  }[];
}

export default defineComponent({
  name: "CategoryItem",
  data () {
    return {
      isSubCategoriesVisible: false,
    }
  },
  props: {
    category: {
      type: Object as PropType<Category>,
    },
  },
  methods: {
    openCategory (): void {
      this.isSubCategoriesVisible = !this.isSubCategoriesVisible;
    }
  }
})
</script>

<template>
  <div class="category-item">
    <button class="category-btn" @click="openCategory">
      <div class="category-title">
        <div class="subcategories" v-if="isSubCategoriesVisible">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292969 7.29289C-0.0975552 7.68342 -0.0975552 8.31658 0.292969 8.70711L7.29297 15.7071C7.68349 16.0976 8.31666 16.0976 8.70718 15.7071C9.09771 15.3166 9.09771 14.6834 8.70718 14.2929L2.41429 8L8.70718 1.70711C9.09771 1.31658 9.09771 0.683417 8.70718 0.292893C8.31666 -0.0976311 7.68349 -0.0976311 7.29297 0.292893L0.292969 7.29289Z" fill="#333333"/>
          </svg>
        </div>
        {{ category.name }}
      </div>
      <span>{{ category.quantity }}</span>
    </button>
    <div class="subcategories" v-if="isSubCategoriesVisible">
        <div class="category-item" v-for="subCategory in category.subCategories" :key="subCategory.id">
          <button class="category-btn category-btn--subcategory" >
            {{ subCategory.name }}
            <span>{{ subCategory.quantity }}</span>
          </button>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-item {
  min-height: 30px;
}
.category-btn {
  display: flex;
  align-items: center;
  padding: 0 5px;
  height: 100%;
  min-height: 30px;
  cursor: pointer;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  border: none;
  font-weight: 400;
  font-size: 14px;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%;
  min-height: 30px;
}

.category-btn:hover {
  background: var(--c-font-bg)
}

.category-btn--subcategory {
  padding: 2px 5px 2px 25px;
}
</style>
