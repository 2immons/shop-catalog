<script lang="ts">
import {defineComponent, PropType} from 'vue'
import BuyButton from "@/components/product_card/BuyButton.vue";
import SaleLabel from "@/components/product_card/shields/SaleLabel.vue";
import PopularityLabel from "@/components/product_card/shields/PopularityLabel.vue";
import NotifyRestock from "@/components/product_card/NotifyRestock.vue";

interface Product {
  id: number;
  title: string;
  oldPrice: number,
  newPrice: number,
  isPopular: boolean,
  sale: number,
  brand: number,
  size: number,
  quantity: number,
}

export default defineComponent({
  name: "ProductCard",
  components: {
    NotifyRestock,
    BuyButton, SaleLabel, PopularityLabel
  },
  props: {
    product: {
      type: Object as PropType<Product>,
    },
  }
})
</script>

<template>
<div class="product-card">
  <div class="photo-section">
    <SaleLabel v-if="this.product.sale > 0" :value="this.product.sale"/>
    <PopularityLabel v-if="this.product.isPopular"/>
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5" clip-path="url(#clip0_8229_786)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M58.23 11.1487C58.7521 11.3571 59.1997 11.7171 59.5152 12.1823C59.8307 12.6476 59.9996 13.1966 60 13.7587V46.2412C59.9996 46.8034 59.8307 47.3524 59.5152 47.8177C59.1997 48.2829 58.7521 48.6429 58.23 48.8512L31.0425 59.7262C30.3721 59.9944 29.6242 59.9944 28.9538 59.7262L1.76625 48.8512C1.24488 48.6423 0.79802 48.282 0.483227 47.8169C0.168434 47.3517 0.000130725 46.8029 0 46.2412L0 13.7587C0.000130725 13.1971 0.168434 12.6483 0.483227 12.1831C0.79802 11.718 1.24488 11.3577 1.76625 11.1487L27.9113 0.689995L27.9488 0.678745L28.9538 0.273745C29.6253 0.00461759 30.3747 0.00461759 31.0463 0.273745L32.055 0.678745L32.0925 0.689995L58.23 11.1487ZM39.015 7.5L15.9375 16.7287L6.9225 13.125L3.75 14.3962V15.8962L28.125 25.6462V55.3537L30 56.1037L31.875 55.3537V25.65L56.25 15.9V14.4L53.0775 13.1287L30 22.3537L20.985 18.75L44.0625 9.52125L39.015 7.5Z" fill="#A6A9C7"/>
      </g>
      <defs>
        <clipPath id="clip0_8229_786">
          <rect width="60" height="60" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </div>
  <div class="info-section">
    <div class="product-header">
      <div class="product__brand">
        {{ this.product.brand }}
      </div>
      <div class="product__title">
        {{ this.product.title }}
      </div>
    </div>
    <div class="product__price" v-if="this.product.quantity > 0">
      <p class="price__new">{{ this.product.newPrice }} ₽</p>
      <p class="price__old">{{ this.product.oldPrice }} ₽</p>
    </div>
    <BuyButton v-if="this.product.quantity > 0" />
    <NotifyRestock v-if="this.product.quantity === 0" />
  </div>
</div>
</template>

<style scoped lang="scss">
.product-card {
  display: grid;
  grid-template-rows: 5fr 4fr;
  gap: 16px;
}

.photo-section {
  position: relative;
  min-height: 200px;
  max-height: 200px;
  background: #F8F8FA;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.info-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  text-align: start;
}

.product-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
}

.product__brand {
  color: var(--c-font-second);
  font-weight: 400;
}

.product__title {
  color: var(--c-font-main);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-size: 14px;
  line-height: 16px;
}

.product__price {
  display: flex;
  align-items: center;
  gap: 8px;
}

.price__new {
  font-size: 16px;
  font-weight: 700;
}

.price__old{
  font-size: 12px;
  text-decoration: line-through;
}
</style>