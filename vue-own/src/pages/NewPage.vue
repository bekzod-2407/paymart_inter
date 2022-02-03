<template>
  <div class="test">
    <div class="counter-block">
      <clicker></clicker>
      <div class="products" >
        <products 
          v-for="product in products" 
          :key="product.id"
          :product='product'  
        >
          <template #test>
            <div>
                <h1>slot from home: {{product.name}}</h1>
            </div>
          </template>
        </products>
      </div>
    </div>
  </div>
</template>
<script>
  import clicker from '../components/ClickerComp.vue'
  import products from '../components/products.vue'
  export default {
    name: 'About',
    components: {
      clicker,
      products
    },
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Apple',
            price: 1000,
            color:'red'
          },
          {
            id: 2,
            name: 'Samsung',
            price: 400,
            color:'yellow'
          },
          {
            id: 3,
            name: 'Xiaomi',
            price: 500,
            color:'green'
          },
          {
            id: 4,
            name:'New',
            price:600,
            color:'transparent'
          }
        ]
      }
    },
    created(){
      document.title = this.$route.meta.title;

      this.$store.dispatch('cart/setProduct', this.products);
    }
  }
</script>
<style  lang='scss'>
  .counter-block{
    .count{
      margin-right: 10px;
      margin-left: 10px;
    }
  }
  .test-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .products{
    margin-top: 30px;
    display: flex;
    flex-wrap:wrap;
  }
</style>