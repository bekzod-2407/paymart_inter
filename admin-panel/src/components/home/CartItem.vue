<template>
  <div :class="vertical ? 'item-wrapper vertical-wrapper' : 'item-wrapper'">
    <div :class="vertical ? 'item vertical-item' : 'item'">
      <div class="item-img">
        <div class="item-status">
          <span>-30%</span>
          <span>NEW</span>
        </div>
        <img alt="image" :src="this.imgUrl" />
      </div>
      <div class="item-body">
        <div class="information">
          <p class="item-category">
            {{ this.category }}
          </p>
          <h3
            class="item-title"
            @click="
              $router.push({
                name: 'home.product.view',
                params: { id: productId },
              })
            "
          >
            {{ this.name }}
          </h3>
          <h4 class="item-price">
            {{ this.price }}$
            <span class="item-price-old"> {{ this.oldPrice }} $ </span>
          </h4>
          <div class="item-rating">
            <div class="fa fa-star"></div>
            <div class="fa fa-star"></div>
            <div class="fa fa-star"></div>
            <div class="fa fa-star"></div>
            <div class="fa fa-star"></div>
          </div>
        </div>
        <div class="item-buttons">
          <button @click="addToWishlist(productId)">
            <i :class="`fa ${this.type}`"></i>
            <span class="tooltipp" >{{iconText}}</span>
          </button>
          <button>
            <i class="fa fa-exchange"></i>
            <span class="tooltipp">add to compare</span>
          </button>
          <button
            @click="
              $router.push({
                name: 'home.product.view',
                params: { id: productId },
              })
            "
          >
            <i class="fa fa-eye"></i>
            <span class="tooltipp">Quick View</span>
          </button>
        </div>
      </div>
      <div class="item-add">
        <button @click="addToCart">
          <i class="fa fa-shopping-cart"></i>
          <span>ADD</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../../config";
export default {
  props: {
    vertical: {
      type: Boolean,
    },
    price: {
      type: String,
      required: true,
      default: "100",
    },
    oldPrice: {
      default: 100,
      type: Number,
    },
    name: {
      required: true,
      type: String,
      default: "name",
    },
    category: {
      default: " Russel Group ",
      type: String,
    },
    image: {
      type: Object,
      default: null,
    },
    productId: {
      default: null,
    },
    type: {
      default: "fa-heart",
    },
    iconText: {
      type: String,
      default: 'add to WishlistPage'
    }
  },
  data() {
    return {
      // database from back
      imgUrl: this.image
        ? `${config.URL}/storage/product_images/${this.productId}/${this.image.name}`
        : "https://shoppovia.com/store-front/images/product-default.png",
    };
  },
  async created() {
    console.log(this.category, "CAT:");
  },
  //

  // functions
  methods: {
    async addToCart() {
      await this.$axios.post("api/cart", {
        product_id: this.productId,
        amount: 1,
      });
    },
    addToWishlist(payload) {
      if (this.type == "fa-trash") {
        console.log("deleted", payload);
        this.$store.dispatch("wishlist/removeWishItem");
      } else {
        this.$store.dispatch("wishlist/addWish", payload);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// variables
$green-color: #72e019;
$green-shadow: #64c515;

.item-wrapper {
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 50px;
  &:hover {
    .item {
      transition: all 300ms ease;
      border-color: $green-color;
    }
    .item-add {
      transform: translateY(100%);
      z-index: 0;
    }
  }
}
.item {
  &.vertical-item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0;
    .item-img {
      width: 50%;
    }
    .item-body {
      width: 50%;
      text-align: left;
      justify-content: space-between;
      display: flex;
      padding: 0 50px 0 0;
    }
    .item-buttons {
      display: flex;
      flex-direction: column;
    }
    .item-add {
      transform: translateY(50px);
      background-color: transparent;
      border: 1px solid #ccc;
      button {
        background-color: rgb($green-color, 1);
        color: #fff;
        width: 120px;
        text-align: center;
        span {
          padding-left: 10px;
        }
        i {
          color: #fff;
          opacity: 1;
        }
      }
    }
  }
  position: relative;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: white;
  border-radius: 2px;
  &-add {
    transition: all 0.3s ease;
    position: absolute;
    bottom: 0px;
    width: 100%;
    text-align: center;
    padding: 10px;
    z-index: -99;
    transform: none;
    border-radius: 0 0 10px 10px;
    border: 1px solid #ccc;
    button {
      background-color: #fff;
      padding: 5px 10px;
      color: $green-color;
      border: 1px solid $green-color;
      cursor: pointer;
      transition: all 300ms linear;
      border-radius: 1px;
      position: relative;
      width: 100px;
      position: relative;
      border-radius: 3px;
      &:hover {
        background-color: rgb($green-color, 1);
        color: #fff;
        width: 120px;
        text-align: center;
        span {
          transition: padding 300ms ease-in;
          padding-left: 10px;
        }
        i {
          color: #fff;
          opacity: 1;
        }
      }
      i {
        opacity: 0;
        position: absolute;
        left: 20px;
        color: $green-color;
        // visibility: hidden;
      }
    }
  }

  &-body {
    padding: 15px;
    text-align: center;
    font-size: 16px;
  }
  &-img {
    height: 263px;
    img {
      max-width: 100%;
      height: 100%;
      display: block;
      margin: auto;
      object-fit: contain;
    }
  }
  &-status {
    display: flex;
    position: absolute;
    top: 15px;
    right: 15px;
    span {
      margin: 0 5px;
      border: 1px solid $green-color;
      padding: 5px;
      padding: 2px 10px;
      font-size: 12px;
      cursor: pointer;
      transition: all 300ms linear;
      border-radius: 5px 0 5px 0;
      background-color: rgb($green-color, 0.7);
      color: #fff;
      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 3px $green-shadow;
      }
    }
  }
  &-category {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 12px;
    margin: 0 0 10px;
    color: rgb(151, 151, 151);
  }
  &-title {
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
    margin: 0 0 10px;
    &:hover {
      color: $green-color;
      cursor: pointer;
      transition: all 300ms ease-in;
    }
  }
  &-price {
    color: $green-color;
    font-size: 18px;
    margin: 0 0 10px;
    &-old {
      font-size: 14px;
      color: #ccc;
      font-weight: 300;
      text-decoration: line-through;
    }
  }
  &-rating {
    margin: 10px 0;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 5px;
      z-index: -1;
      width: 100%;
      height: 2px;
      background-color: #ccc;
    }
  }
  &-buttons {
    display: flex;
    justify-content: center;
    button {
      position: relative;
      width: 40px;
      height: 40px;
      background: transparent;
      border: none;
      transition: 0.2s all;
      position: relative;
      span {
        position: absolute;
        bottom: 100%;
        left: 50%;
        width: 150px;
        padding: 2px;
        font-size: 12px;
        background: #1e1f29e3;
        color: $green-color;
        text-transform: uppercase;
        opacity: 0;
        visibility: hidden;
        transition: 0.2s all;
        border-radius: 10px;
        padding: 5px;
        transform: translate(-50%, -15px);
        transition: all 300ms ease-in-out;
      }
      &:hover {
        background: rgb(226, 226, 226);
        border-radius: 50px;
        cursor: pointer;
        i {
          color: $green-color;
        }
        & > span {
          transform: translate(0, 0);
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, -5px);
        }
      }
    }
  }
}
.item-rating .fa-star {
  color: rgb($green-color, 0.8);
}
</style>