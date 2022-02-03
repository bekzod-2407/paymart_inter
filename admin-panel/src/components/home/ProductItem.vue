<template>
  <div class="product-wrapper">
    <div class="product">
      <div class="product-img">
        <img
          alt="image"
          :src="imgUrl"
        />
      </div>
      <div class="product-body">
        <p class="product-category">{{ this.category }}</p>
        <h3 class="product-title">{{ this.name }}</h3>
        <h4 class="product-price">
          {{ this.price + "$" }}
          <span class="product-price-old">
           {{this.price * 1.5 + "$" }}
          </span>
        </h4>
      </div>
    </div>
  </div>
</template>
<script>
import config from "../../config";
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      default: null
    },
    category: {
      default: '',
      required: true,
    },
    image: {
      required: true
    },
    productId: {
      default: null,
    }
    
    
  },
  methods: {

  },
  data() {
    return {
      configURL: config.URL,
      categories: [],
      imgUrl: this.image ? `${config.URL}/storage/product_images/${this.productId}/${this.image.name}` : 'https://shoppovia.com/store-front/images/product-default.png'
    };
  },
  async created() {
    
    // try {
    //   const resp = await this.$axios.get("/api/categories");
    //   this.categories = resp.data;
    //   this.category = this.categories.filter(item => item.id === this.categoryId).name;
    // } catch (error) {
    //   console.log(error);
    // }
  },
};
</script>
<style lang="scss" scoped>
$green-color: #72e019;
$green-shadow: #64c515;
.product {
  // width: 360px;
  display: flex;
  align-items: center;
  margin: 30px 0;
  &-img {
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &-body {
    min-height: 60px;
    margin-left: 10px;
    flex: 1;
    .product-category {
      text-transform: uppercase;
      font-size: 10px;
      color: #8d99ae;
      margin: 0 0 10px;
    }
    .product-title {
      margin: 0 0 10px;
      text-transform: uppercase;
      font-size: 12px;
      transition: all 300ms ease-in;
      &:hover {
        color: $green-color;
        cursor: pointer;
      }
    }
    .product-price {
      color: $green-color;
      margin: 0 0 10px;
      font-size: 16px;
      &-old {
        font-size: 14px;
        color: #ccc;
        font-weight: 300;
        text-decoration: line-through;
      }
    }
  }
}
</style>