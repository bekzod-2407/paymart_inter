<template>
  <div class="container">
    <div class="checkout_wrapper">
      <div class="checkout_form">
        <h2 class="checkout_title">Billing address</h2>
        <form action="#">
          <vue-form-generator
            :schema="schema"
            :model="model"
            :options="formOptions"
          >
          </vue-form-generator>

          <div class="checkout_accaunt">
            <input
              @click="ShowPassword = !ShowPassword"
              type="checkbox"
              name="accaunt"
            />
            <label for="accaunt"> Create Account?</label>
            <div v-if="ShowPassword" class="checkout_accaunt-item">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
              <input
                type="password"
                required
                placeholder="enter your password"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="checkout_order">
        <h2 class="checkout_title">Your Order</h2>
        <div class="checkout_products">
          <div class="checkout_products-item">
            <span><strong>PRODUCT</strong> </span>
            <span><strong>TOTAL</strong></span>
          </div>
          <div
            class="checkout_products-item"
            v-for="item in cartItems"
            :key="item.id"
          >
            <span>{{ item.amount }}x {{ item.product.name }}</span>
            <span>${{ item.product.price }} </span>
          </div>
          <div class="checkout_products-item">
            <span>Shiping </span> <span><strong>FREE</strong> </span>
          </div>
          <div class="checkout_products-item">
            <span><strong>TOTAL</strong> </span>
            <span class="price">${{ totalPrice }}</span>
          </div>
        </div>

        <div class="checkout_products-checks">
          <div class="checkout_products-check">
            <input
              @click="
                ShowOne = !ShowOne;
                ShowSecond = false;
                ShowThird = false;
              "
              type="radio"
              value="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut "
              name="one"
            />
            <label for="one">Direct Bank Transfer</label>

            <div v-if="ShowOne" class="checkbox_products-descr">
              Lorem ipsum dolor sit 11, amet consectetur adipisicing elit.
            </div>
          </div>

          <div class="checkout_products-check">
            <input
              name="one"
              value="Lorem ipsum dolor sit amet, consectetur adipisicing elit "
              type="radio"
              @click="
                ShowSecond = !ShowSecond;
                ShowOne = false;
                ShowThird = false;
              "
            />
            <label for="two">Cheque Payment</label>

            <div v-if="ShowSecond" class="checkbox_products-descr">
              Lorem ipsum dolor sit 22, amet consectetur adipisicing elit.
            </div>
          </div>
          <div class="checkout_products-check">
            <input
              @click="
                ShowThird = !ShowThird;
                ShowOne = false;
                ShowSecond = false;
              "
              name="one"
              type="radio"
              value="Lorem ipsum dolor sit amet, consectetur "
            />
            <label for="three">Paypal System</label>
            <div v-if="ShowThird" class="checkbox_products-descr">
              ipsum dolor sit 33, amet consectetur adipisicing elit.
            </div>
          </div>
          <div class="checkout_products-check checkout_products-check_mt20">
            <input type="checkbox" @change="checked" />
            <label>I've read and accept the terms & conditions </label>
          </div>
        </div>
        <div class="submit">
          <button
            type="submit"
            :class="[!iAgree ? 'disabled-btn' : iAgree, 'btn']"
            @click="ordering"
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {

    return {
      ShowSecond: false,
      ShowOne: false,
      ShowThird: false,
      ShowPassword: false,
      model: {
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        city: "",
        country: "",
        zip_code: "",
        tel: "",
        order_notes: "",
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            placeholder: "First name",
            model: "first_name",
            required: true,
            validator: "string",
          },
          {
            type: "input",
            inputType: "text",
            placeholder: "Last name",
            model: "last_name",
            required: true,
            validator: "string",
          },
          {
            type: "input",
            inputType: "email",
            placeholder: "Email",
            model: "email",
            required: true,
            validator: 'email'
          },
          {
            type: "input",
            inputType: "text",
            placeholder: "Address",
            model: "address",
            required: true,
            validator: "string",
          },
          {
            type: "input",
            inputType: "text",
            placeholder: "City",
            model: "city",
            required: true,
            validator: "string",
          },
          {
            type: "input",
            inputType: "text",
            placeholder: "Country",
            model: "country",
            required: true,
            validator: "string",
          },
          {
            type: "input",
            inputType: "number",
            placeholder: "ZipCode",
            model: "zip_code",
            required: true,
            validator: "number",
          },
          {
            type: "input",
            inputType: "tel",
            placeholder: "Telephone",
            model: "tel",
            required: true,
            validator: "",
          },
          {
            type: "textArea",
            inputType: "text",
            placeholder: "Order  Notes",
            model: "order_notes",
            hint: "Max 500 characters",
            required: true,
            validator: "string",

          },
          // {
          //   type: "checkbox",
          //   label: "Create Account?",
          //   model: "accaunt",
          //   required: true,
          //   default: true,
          // },
        ],
      },
      formOptions: {
        validateAfterChanged: true,
      },
      cartItems: '',
      totalCount: '',
      totalPrice: 0,
      iAgree: false,
      count: 0,

    };
  },
  methods:{
   checked(){
      this.iAgree = !this.iAgree
    },



   async ordering(){
     await this.$axios.post('api/user_orders', this.model);
     const items = this.cartItems
      if(this.cartItems.length){
     await  items.forEach(item =>  this.$axios.delete(`api/cart/${item.id}`)
        )
        // await this.$axios.delete('api/cart')
      }
    }
  },

   async created(){
    const resp = await this.$axios.get('api/cart')
        // products
        this.cartItems = resp.data.cart
        // amount
        this.totalCount = resp.data.cart.length
        // all price
        this.totalPrice = resp.data.cart.reduce((sum, {product}) => parseInt(product.price) + sum,0)

    },


};
</script>

<style lang="scss" scoped>
$main_color: #72e019;
.submit {
  display: flex;
  align-items: flex-end;
}
input[type="radio"] {
  position: relative;
  height: 12px;
  width: 12px;
  appearance: none;
  outline: none;
  border-radius: 50%;
  border: 1px solid #ccc;
  &:checked {
    background-color: $main_color;
  }

  //   background-color: red;
}

.btn {
  margin-top: 87px;
  padding: 19px 30px;
  background-color: $main_color;
  border: none;
  border-radius: 40px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  -webkit-transition: 0.2s all;
  transition: 0.5s all;
  width: 100%;
  pointer-events: auto;
  &:hover {
    border: 1px solid $main_color;
    color: $main_color;
    background-color: #fff;
    cursor: pointer;
  }
}
.disabled-btn {
  margin-top: 87px;
  padding: 19px 30px;
  background-color: #e3e3e3;
  border: none;
  border-radius: 40px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  -webkit-transition: 0.2s all;
  transition: 0.5s all;
  width: 100%;
  pointer-events: none;
}
.price {
  font-size: 14px;
  color: $main_color;
}

.checkout_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  .checkout_form {
    padding-top: 33px;
    margin-right: 50px;
    width: 100%;
    form {
      display: flex;
      flex-direction: column;
      .checkout_accaunt {
        padding: 15px;
        &-item {
          p {
            margin: 10px 0;
          }
          input {
            height: 40px;
            width: 100%;
            padding: 0px 15px;
            border: 1px solid #e4e7ed;
            background-color: #fff;
          }
        }
      }
      input {
        padding: 0px 15px;
        border: 1px solid #e4e7ed;
        background-color: #fff;
        // width: 100%;
      }
      textarea {
        padding: 10px;
        resize: none;
      }
    }
  }
}

.wrapper {
  margin-top: 0;
}

.vue-form-generator .form-control {
  height: 45px;
}
.checkout_input {
  margin-bottom: 15px;
  height: 40px;
  padding: 0px 15px;
  border: 1px solid #e4e7ed;
  background-color: #fff;
  width: 100%;
}

.checkout_order {
  margin-top: 40px;
  position: relative;
  padding: 0px 30px 30px;
  border-right: 1px solid #e4e7ed;
  border-left: 1px solid #e4e7ed;
  border-bottom: 1px solid #e4e7ed;
  width: 100%;
  align-self: flex-start;
  &::before {
    content: "";
    position: absolute;
    right: -1px;
    top: -15px;
    left: -1px;
    height: 30px;
    border-top: 1px solid #e4e7ed;
    border-left: 1px solid #e4e7ed;
    border-right: 1px solid #e4e7ed;
  }
}
.checkout_products {
  &-item {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 12px;
  }

  &-check {
    margin-top: 7px;
    font-weight: 500;
    min-height: 20px;

    margin-bottom: 5px;
    cursor: pointer;
    label {
      padding-left: 10px;
    }
    &_mt20 {
      margin-top: 30px;
    }
  }
  &-descr {
    padding-left: 40px;
    text-align: left;
  }
}
.checkout_title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
  text-transform: uppercase;
}
//  MEDIA
.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 980px;
    .price {
      font-size: 24px;
      color: $main_color;
    }
    .checkout_wrapper {
      display: flex;
      flex-direction: row;

      justify-content: space-between;
      font-size: 16px;
      .checkout_order {
        font-size: 16px;
        width: 40%;
      }
      .checkout_products-item {
        font-size: 14px;
      }
    }
    .checkout_form {
      width: 60%;
      margin-right: 40px;
    }
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
}
</style>
