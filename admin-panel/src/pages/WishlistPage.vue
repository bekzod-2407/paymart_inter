<template>
  <div class="container">
    <div class="wrapper">
      <h1 class="title">Избранные товары</h1>

      <div class="cart-items" v-if="wishedProducts.length">
        <div class="item" v-for="product in wishedProducts" :key="product.id">
          <cart-item
          :productId="product.id"
            :name="product.name"
            :vertical="false"
            :image="product.image[0]"
            :price="product.price"
            :oldPrice="product.price * 2"
            :category="product.category"
            type="fa-trash"
            iconText="Delete from wishlist"
          />
        </div>
      </div>

      <div class="empty" v-else>
        <img src="../assets/empty-wishlist..svg" alt="" />
        <p class="subtitle">Ваш список избранного пуст</p>
        <div class="descr">
          Добавляйте понравившиеся товары в избранное, чтобы посмотреть или
          купить их позже
        </div>
        <router-link :to="{ name: 'home' }">
          <button class="btn">Перейти на главную</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "../components/home/CartItem.vue";

export default {
  components: { CartItem },
  props: {
  //  type: {
  //    required:
  //     default: "fa-heart",
  //   },
  },
  data() {
    return {
      products: [],
      productIds: [],
      wishedProducts: [],
    };
  },

  async created() {

    const resp = await this.$axios.get("api/products");
    this.products = resp.data;
    this.productIds = this.$store.getters["wishlist/getList"];
    this.wishedProducts = this.productIds.map((id) => {
      return this.products.find((prod) => {
        if (prod.id === id) {
          return prod;
        }
      });
    });
    console.log("YOUT WISHLIST ::: ", this.wishedProducts);
   
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.cart-items {
  padding-top: 40px;
  display: flex;
}

.item {
  width: 33.3333%;
}
.wrapper {
  padding-top: 40px;
  min-height: 360px;
  padding-top: 20px;
  .title {
    text-align: center;
  }
  .products {
    display: flex;
    align-items: start;
    flex-direction: row;
  }
  .empty {
    width: 360px;
    margin: 0 auto;
    text-align: center;
    .subtitle {
      font-size: 16px;
    }
    .btn {
      margin-top: 10px;
      border: 2px solid#72E019;
      font-size: 13px;
      width: 140px;
      height: 40px;
      border-radius: 10px;
      transition: all 0.4s;
      &:hover {
        cursor: pointer;
        color: #fff;
        border-color: #767676;
        background-color: #72e019;
      }
    }
    img {
      width: 150px;
      height: 150px;
      object-fit: contain;
    }
    .descr {
      font-size: 12px;
      margin-top: 15px;
      color: #767676;
    }
  }
}
</style>