<template>
  <div class="product_wrapper">
  

    <!-- <div class="product">
      <div class="item-img">
        <img alt="image" src="http://market.local/img/product06.png" />
      </div>
      <div class="item-body">
        <div class="information">
          <p class="item-category">Category</p>
          <h3 class="item-title">name</h3>
          <h4 class="item-price">
            100$
            <span class="item-price-old"> 150$ </span>
          </h4>
          <div class="item-rating">*****</div>
        </div>
        <div class="item-buttons">
          <button>
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </button>
          <button>
            <i class="fa fa-exchange"></i>
          </button>
          <button>
            <i class="fa fa-eye"></i>
          </button>
        </div>
      </div>
      <div class="item-add">
        <button @click="console.log('clicked')">
          <i class="fa fa-shopping-cart"></i>
          <span>ADD</span>
        </button>
      </div>
    </div>
    <div class="product">
      <div class="item-img">
        <img alt="image" src="http://market.local/img/product07.png" />
      </div>
      <div class="item-body">
        <div class="information">
          <p class="item-category">Category</p>
          <h3 class="item-title">name</h3>
          <h4 class="item-price">
            100$
            <span class="item-price-old"> 150$ </span>
          </h4>
          <div class="item-rating">*****</div>
        </div>
        <div class="item-buttons">
          <button>
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </button>
          <button>
            <i class="fa fa-exchange"></i>
          </button>
          <button>
            <i class="fa fa-eye"></i>
          </button>
        </div>
      </div>
      <div class="item-add">
        <button @click="console.log('clicked')">
          <i class="fa fa-shopping-cart"></i>
          <span>ADD</span>
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>

export default {

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

 <style lang="scss"  >
$green-color: #72e019;
$green-shadow: #64c515;

.product_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  // flex-wrap: w rap;
  justify-content: space-around;
  flex-direction: row;
  padding: 0 100px;
  margin: 10px 0;
}
.product {
  border: 1px solid #ccc;
  width: 250px;
  margin-left: 10px;

  .item-img {
    width: 90%;
  }

  img {
    width: 100%;
  }
  .item {
    position: relative;
    border: 3px solid #ccc;
    &-add {
      transition: all 0.3s ease;
      width: 100%;
      text-align: center;
      padding: 10px;
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
      padding: 0 10px;
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
        top: 25px;
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
        &:hover {
          background: rgb(226, 226, 226);
          border-radius: 50px;
          cursor: pointer;
          i {
            color: $green-color;
          }
        }
      }
    }
  }
}
</style> 