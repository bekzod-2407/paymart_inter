<template>
  <div class="content">
    <div class="naming">
      <p class="img">image</p>
      <p class="product">product</p>
      <div class="color-size">
        <p class="color">color</p>
        <p class="size">size</p>
      </div>
      <p class="price">price</p>
      <p class="qty">qty</p>
      <p class="amount">amount</p>
      <div class="to__cart"></div>
    </div>
    <hr />
    <div class="products">
      <div
        class="product-wrapper"
        v-for="product in products"
        :key="product.id"
      >
        <div class="naming">
          <div class="img">
            <!-- <img :src="product.img" alt="" /> -->
          </div>

          <p class="product">
            {{ product.name }} <span>By {{ product.brand_id }}</span>
          </p>
          <div class="color-size">
            <p class="color">{{ product.color }}</p>
            <p class="size">{{ product.size }}</p>
          </div>
          <p class="price">€{{ product.price }}</p>
          <div class="qty">
            <div class ="qty-wrapper">
              <button class="minus" @click="minus(product)"><i class="fa fa-minus"></i></button>
              <p>{{ product.amount }}</p>
              <button class="plus" @click="plus(product)"><i class="fa fa-plus"></i></button>
            </div >
          </div>

          <p class="amount">{{ product.amount = product.price * product.count }}</p>
          <button class="to__cart"
          @click="$router.push({name: 'admin.products.view', params: {id: product.id}})"><i class="fa fa-shopping-cart"></i></button>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "ProductsPage",
  data() {
    return {
      products: [
        // {
        //   id: 1,
        //   img: "https://cdn1.ozone.ru/s3/multimedia-v/wc1200/6077290843.jpg",
        //   name: "Spring Jacet",
        //   brand: "Dolce&Gabbana",
        //   color: "red",
        //   size: "M",
        //   price: 549,
        //   qty: 0,
        //   amount: '',
        // },
        // {
        //   id: 2,
        //   img: "https://images.stockx.com/images/Eric-Emanuel-EE-Basic-Short-Purple-Yellow.png?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1625189011&pad=0&fm=webp",
        //   name: "Short Pants",
        //   brand: "Gucci",
        //   color: "purple",
        //   size: "M",
        //   price: 349,
        //   qty: 0,
        //   amount:'',
        // },
        // {
        //   id: 3,
        //   img: "https://assets.ajio.com/medias/sys_master/root/20210403/Y8ME/60694f20aeb269a9e341a127/-473Wx593H-461385498-white-MODEL2.jpg",
        //   name: "Pensil Skirt",
        //   brand: "Valentino",
        //   color: "white",
        //   size: "XL",
        //   price: 149,
        //   qty: 0,
        //   amount: '',
        // },
        
      ],
      count: 0 ,
    };
  },
  methods:{
      // eslint-disable-next-line vue/return-in-computed-property
      minus(product){
           product.count--
          if(product.count < 0 ){
             product.count = 0
          }
        },
    plus(product) {
        product.count++
        if(product.count > 10 ){
            product.count = 10
        }
    },


  
},
async created(){

  'https://marketpaymart.herokuapp.com/api/dashboard/product'
  const {data} = await axios.get('https://61ade31fd228a9001703b022.mockapi.io/api/products')
  this.products = data
}
}
</script>

<style lang="scss" scoped>
$color-scroll: #686464;

.content {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: rgb(238, 238, 238);
  height: calc(100vh - 100px);
  overflow-y: auto;
}
.color-size {
  display: flex;
}
.naming {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  p {
    text-align: center;
  }
  img {
    max-width: 100%;
  }
  .img {
    width: 20%;
  }
  .color-size {
    width: 20%;
    .color {
      margin-right: 20px;
      width: 50%;
    }
  }
  .product {
    width: 20%;
    .span {
      color: #c6c6cc;
    }
  }
  .qty {
    width: 20%;
    display: flex;
    justify-content: center;
  }
  .price {
    width: 10%;
  }
  .amount {
    width: 5%;
    margin-right: 40px;
  }
}
.products {
  .naming {
    .product {
      width: 20%;
      display: flex;
      flex-direction: column;
      span {
        color: rgb(146, 146, 146);
      }
    
     }
      .to__cart{
          background: none;
          border: none;
          width: 5%;
          cursor: pointer;
          i{
              font-size: 25px;
              color: teal;
              width: 100%;
          }
      }.amount{
          margin-right: -30px;
          width: 5%;
      }
  }
}
  .qty-wrapper{
          display: flex;
          align-items: center;
          background: teal;
          padding: 10px 20px;
          font-weight: bold;
          border-radius: 20px;
          color: white;
          font-size: 20px;
          button{
              cursor: pointer;
              padding: 10px 25px;
              border: none;
              background: none;
               i{
                   color: white;
               }
          }
         
      }
// CHROME
::-webkit-scrollbar {
  width: 5px;
  position: absolute;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  z-index: 500;
  background-color: lighten($color-scroll, 0%);
}
::-webkit-scrollbar-thumb:hover {
  background-color: darken($color-scroll, 5%);
}
::-webkit-scrollbar-thumb:active {
  background-color: darken($color-scroll, 10%);
}
::-webkit-scrollbar-track-piece {
  background-color: white;
}
// OPERA
::-o-scrollbar {
  width: 5px;
  position: absolute;
}
::-o-scrollbar-thumb {
  z-index: 500;
  border-radius: 5px;
  background-color: lighten($color-scroll, 5%);
}
::-o-scrollbar-thumb:hover {
  background-color: darken($color-scroll, 5%);
}
::-o-scrollbar-thumb:active {
  background-color: darken($color-scroll, 10%);
}
::-o-scrollbar-track-piece {
  background-color: rgba(white, 0.5);
}
</style>