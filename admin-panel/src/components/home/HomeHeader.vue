<template>
  <div class="home-header" @click="closeCart">
    <div class="header-top-wrapper">
      <div class="container">
        <div class="header-top">
          <div class="contacts-info">
            <div class="item">
              <a href="tel:+99897-777-07-77">
                <i class="fa fa-phone"></i>
                <p>+021-95-51-84</p>
              </a>
            </div>
            <div class="item">
              <a href="tel:+021955184">
                <i class="fa fa-envelope"></i>
                <p>email@email.com</p>
              </a>
            </div>
            <div class="item">
              <i class="fa fa-map-marker"></i>
              <p>1734 Stonecoal Road</p>
            </div>
          </div>
          <div class="login">
            <div class="item">
              <a href="#" @click.prevent="$router.push({ name: 'auth' })">
                <i class="fa fa-user"></i>
                <p>login</p>
              </a>
            </div>
          </div>
          <div class="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom-wrapper">
      <div class="container">
        <div class="header-bottom">
          <div class="logo">
            <a href="#" @click.prevent="$router.push({ name: 'home' })">
              <img src="../../assets/logo.png" alt="" />
            </a>
          </div>
          <div class="search-wrapper">
            <form action="">
              <div class="form-content">
                <select>
                  <option>All</option>
                  <option>PC</option>
                  <option>Phones</option>
                </select>
                <input type="text" />
                <button>Поиск</button>
              </div>
            </form>
          </div>
          <div class="actions">
            <div class="item">
              <router-link :to="{ name: 'home.wishlist' }">
                <i class="fa fa-heart-o"></i>
                <p>Your Wishlist</p>
                <div class="number">
                  <span>{{  this.$store.getters["wishlist/getCount"]}}</span>
                </div>
              </router-link>
            </div>
            <div class="item">
              <a href="#" @click.prevent="isOpen = !isOpen">
                <i class="fa fa-shopping-cart"></i>
                <p>Your Cart</p>
                <div class="number"><span>{{this.$store.getters['cart/getTotalCount']}}</span></div>
              </a>
            </div>
          </div>
          <div class="cart-wrapper" v-if="isOpen">
            <div v-if="this.cartItems.length > 0"> 
              <div class="cart-close" @click="isOpen = false">&times;</div>
              <div class="items">
                <header-cart
                  v-for="item in this.cartItems"
                  :key="item.id"
                  :item="item"
                />
              </div>
              <div class="total-price">
                <p>{{cartItems.length}} Item(s) selected</p>
                <h3>SUBTOTAL: ${{this.totalPrice}}</h3>
              </div>
              <div class="buttons">
                <router-link to="/cart" class="button-view button">
                  <p>View Cart</p>
                </router-link>
                <router-link to="/checkout" class="button-checkout button">
                  <p>Checkout</p>    
                  <i class="fa fa-arrow-circle-right"></i>
                </router-link>
              </div>
            </div>
            <div v-else class="empty-cart">
              <div class="empty-close" @click="isOpen = false">&times;</div>
              Корзина пуста
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCart from "./HeaderCart.vue";
export default {
  name: "HomeHeader",
  data() {
    return {
      isOpen: false,
      totalPrice: 0,
      totalCount: 0,
      cartItems: this.$store.getters['cart/getCartItems']
    }
  },
  watch:{
    // чтобы следить за продуктами в корзине 
    totalCount(){
      this.$store.getters['cart/getCartItems']
    }
    
  },
  components: {
    HeaderCart,
  },
  methods: {
    closeCart(){
      const $this = this
      document.addEventListener('mouseup',function(e) {
        if (!e.target.closest(".cart-wrapper")) {
          $this.isOpen = false
        }
      });
    }
  },
  async created(){
    this.totalPrice = this.$store.getters['cart/getCartItems'].reduce((sum, item) => parseInt(item.price) + sum,0)
  }

}
</script>

<style lang='scss' scoped>
$color-1: #72e019;
$color-2: #1a1a1a;
.home-header {
  background-color: $color-2;
}
.header-top-wrapper {
  width: 100%;
  .header-top {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .mobile-menu {
      display: none;
      @media (max-width: 991px) {
        display: block;
      }
      span {
        display: block;
        width: 30px;
        height: 3px;
        background-color: $color-1;
        margin-bottom: 2px;
      }
    }
    .login {
      .item {
        margin-right: 0;
      }
    }
    .item {
      margin-right: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      i {
        transition: all 0.3s ease;
        margin-right: 10px;
        color: $color-1;
      }
      a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        &:hover {
          color: $color-1;
        }
      }
    }
  }
  .contacts-info {
    display: flex;
    align-items: center;
    @media (max-width: 991px) {
      display: none;
    }
  }
}
.header-bottom-wrapper {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 3px solid $color-1;
  img {
    max-width: 100%;
  }
  .header-bottom {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .cart-wrapper {
      border: 1px solid black;
      padding: 20px;
      width: 300px;
      position: absolute;
      bottom: 0;
      transform: translateY(100%);
      right: 0;
      background-color: white;
      z-index: 9999;
      .cart-close{
        position: absolute;
        top: -20px;
        right: -15px;
        position: absolute;
        font-size: 20px;
        border-radius: 50px;
        font-weight: 700;
        background: red;
        color: #fff;
        padding: 10px;
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover{
          transition: all 300ms linear;
          box-shadow: 0 0 5px red;
          transform: scale(1.1);
        }
      }
      .items {
        margin-bottom: 20px;
        max-height: 200px;
        overflow-y: auto;
        position: relative;
      }
      .item {
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 20px;
        &:first-child {
          margin-top: 0;
        }
        .left-side {
          width: 30%;
          margin-right: 5%;
        }
        .right-side {
          width: 65%;
          .prod-info {
            display: flex;
            align-items: center;
            h3 {
              margin: 0;
            }
            p {
              margin: 0;
              margin-right: 20px;
            }
          }
        }
        .remove {
          position: absolute;
        }
      }
      .total-price {
        padding: 20px 0;
        border-top: 1px solid #000;
        p {
          margin-bottom: 0;
        }
        h3 {
          margin-top: 0;
        }
      }
      .buttons {
        display: flex;
        margin: -20px -20px;
        margin-top: 0;
        a {
          padding: 5px 20px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          width: 100%;
          transition: all 0.3s ease;
          color: white;
          p {
            margin-bottom: 0;
          }
          i {
            margin-left: 10px;
            color: white;
          }
        }
        .button-view {
          background-color: $color-2;
        }
        .button-checkout {
          background-color: $color-1;
        }
      }
    }
      .empty-cart{
        text-align: center;      
        padding: 20px;
        position: relative;
        .empty-close{
          position: absolute;
          top: -35px;
          right: -35px;
          font-size: 20px;
          border-radius: 50px;
          font-weight: 700;
          background: red;
          color: #fff;
          padding: 10px;
          height: 30px;
          width: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          &:hover{
            transition: all 300ms linear;
            box-shadow: 0 0 5px red;
            transform: scale(1.1);
          }
      }
    }
    
    .search-wrapper {
      @media (max-width: 991px) {
        display: none;
      }
      .form-content {
        display: flex;
        align-items: center;
      }
      border-radius: 30px;
      overflow: hidden;
      input {
        padding: 5px 10px;
        outline: none;
        border: none;
        height: 40px;
      }
      button {
        outline: none;
        border: none;
        height: 40px;
        padding: 5px 20px;
        transition: all 0.3s ease;
        cursor: pointer;
        &:hover {
          background-color: $color-1;
          color: white;
        }
      }
      select {
        padding-left: 20px;
        outline: none;
        border: none;
        border-right: 1px solid $color-1;
        height: 40px;
      }
    }
    .actions {
      color: white;
      display: flex;
      align-items: center;
      p {
        @media (max-width: 991px) {
          display: none;
        }
      }
      .item {
        a {
          color: white;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
          &:hover {
            color: $color-1;
            i {
              color: $color-1;
            }
          }
        }
        .number {
          position: absolute;
          top: 0;
          right: 50%;
          min-width: 20px;
          max-width: 20px;
          min-height: 20px;
          max-height: 20px;
          transform: translate(150%, -50%);
          border-radius: 50%;
          background-color: $color-1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        p {
          margin: 0;
        }
        span {
          color: white;
        }
        i {
          transition: all 0.3s ease;
          font-size: 20px;
          margin-bottom: 10px;
          color: white;
          @media (max-width: 991px) {
            margin-bottom: 0;
          }
        }
        margin-right: 20px;
        @media (max-width: 991px) {
          margin-right: 40px;
        }
        &:last-child {
          margin-right: 20px;
        }
        @media (min-width: 992px) {
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>