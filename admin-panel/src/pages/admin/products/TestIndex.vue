<template>
  <div class="content test-wrapper">
      <Loader v-if="loading" />

    <div v-else class="wrapper__table">
      <Select
        :options="categories"
        @select="sortByCategories"
        :selected="selected"
      />
      <vuetable
        :data="filterProducts"
        :fields="fields"
        pagination-path=""
        :api-mode="false"
        :per-page="5"
      >
  <template slot="images" slot-scope="props">
          <div class="img__wrapper">
            <img v-if="props.rowData.image.length > 0" :src="`${configURL}/storage/product_images/${props.rowData.image[0].product_id}/` + props.rowData.image[0].name" alt="">
            <img v-else :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWyg5k6Y2X4OaOfDMPcFaAwL9r_eN34CUXbEgCEjMepep7WMua2z90y_DGL0YobiBjRY&usqp=CAU'"  alt="">
          </div>
        </template>
        <template slot="product" slot-scope="props">
          <div class="product__wrapper">
            <p class="name">
              {{ props.rowData.name }}
            </p>
            <p class="brand">
             <span >By  {{ props.rowData.brand.name }}</span> 
              
            </p>
          </div>
        </template>
        <template slot="category" slot-scope="props">
          <div class="product__wrapper">
            <p class="price">{{ props.rowData.category }}</p>
          </div>
        </template>
        <template slot="price" slot-scope="props">
          <div class="product__wrapper">
            <p class="price">€ {{ props.rowData.price }}</p>
          </div>
        </template>
        <template slot="quantity" slot-scope="props">
          <div class="count-wrapper">
            <button class="minus" @click="minus(props.rowData)">
              <i class="fa fa-minus"></i>
            </button>
            <p>{{ props.rowData.quantity }}</p>
            <button class="plus" @click="plus(props.rowData)">
              <i class="fa fa-plus"></i>
            </button>
          </div>
        </template>
        <template slot="amount" slot-scope="props">
          <div>
              <p class="amount">€ {{props.rowData.amount = props.rowData.quantity * props.rowData.price}}</p>
          </div>
        </template>

        <template slot="cart" slot-scope="props">
          <div class="cart">
            <button
              class="to__cart"
              @click="
                $router.push({
                  name: 'admin.products.view',
                  params: { id: props.rowData.id },
                })
              "
            >
              <i class="fa fa-edit"></i>
            </button>
          </div>
        </template>
      </vuetable>
      <div class="pagination" v-if="this.totalPages > 1" >
            <button 
                v-for="pageNumber in this.totalPages" 
                :key="pageNumber"  
                @click="changePage(pageNumber)"
                :class="{
                    'btn__active': page ===pageNumber
                }"
            >
                {{pageNumber}}
            </button>
        </div>
    </div>
  </div>
</template>
<script>

import Vuetable from "vuetable-2";
import  productFields  from "@/utils-vuetable/productVuetable/Fields";
import defaultImage from '../../../assets/login_bg.jpg'
import config  from '../../../config';
import Loader from '../../../components/Loader.vue';
import Select from '../../../components/Select.vue'

export default {
  components: {
    Vuetable,
    Loader,
    Select,
    // VuetablePagination,
  },
  data() {
    return {
      loading: true,
      selected: 'All',
      categories: null,
      sortedProducts: [],
      brand: '',
      defaultImage,
      productsData: null,
      perPage: 5,
      page: 1,
      totalPages: "",
      fields: productFields(this.$i18n),
      configURL: config.URL
    };
  },
  computed:{
 filterProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.productsData;
      }
    },
  },
  methods: {
    optionSelect(option) {
      this.selected = option.name;
    },
     sortByCategories(category) {
       console.log(this.productsData);
      this.productsData
      this.sortedProducts = [];
      let vm = this;
      this.productsData.map(function (item) {

        if (item.category.name == category.name) {
          vm.sortedProducts.push(item);
          
        }
      });
      this.selected = category.name;
      
    },
    
    minus(product) {
      product.quantity--;
      
      if (product.quantity < 0) {
        product.quantity = 0;
      }
    },
    plus(product) {
      product.quantity++;
      
     
    },
    changePage(pageNumber){
      this.page = pageNumber
    },
    async fetchData(){
        const resp = await this.$axios.get(`/api/dashboard/products`,{
        params: {
          
        }})
        // this.totalPages = Math.ceil(resp.data.meta.total / this.perPage)
        this.productsData = resp.data
    }
  },
  async created() {

    const resp = await this.$axios.get(
      `/api/dashboard/products`
    );
    const resp2 = await this.$axios.get(
      `/api/dashboard/categories`
    )
    this.productsData = resp.data; 
    this.categories = resp2.data
  },
   async mounted(){
    await this.fetchData();
    this.loading = false
  },
  watch: {
    page() {
      this.fetchData()
    },
    
  },
};
</script>

<style lang="scss" scoped>
.v__select{
  margin-bottom: 10px;
}
$main-color: rgb(31, 7, 110);
.pagination{
  display: flex;
  margin-top: 10px;
  margin: 10px -10px;
  justify-content: flex-end;
  button{
    color: rgb(117, 117, 117);
    padding: 10px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 4px;
    border: 2px solid rgb(117, 117, 117);
  }
}
.count-wrapper {
  display: flex;
  align-items: center;

  background: teal;
  padding: 2px 7px;
  font-weight: bold;
  border-radius: 7px;
  color: white;
  font-size: 20px;
  button {
    cursor: pointer;
    padding: 10px 15px;
    border: none;
    background: none;
    i {
      color: white;
    }
  }
  p {
    margin: 0 auto;
  }
}
.to__cart{
    background: none;
    border: none;
    cursor: pointer;
        i{
            color: teal;
            font-size: 25px;
        
        }
}
.price{
        font-weight: bold;
        font-size: 20px;
        color: teal;
}
.brand{
    span{
        color: grey;
        font-weight: bold;
        font-size: 16px;
        font-weight: bold;
        text-transform: none;
    }
}
.name{
    color: teal;
    font-size: 18px;
    font-weight: bold;
}
.brand{
    color: teal;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
}
.amount{
    font-weight: bold;
    font-size: 20px;
    color: teal;
}

.img__wrapper{
    width: 100%;
    height: auto;
    img{
        max-width: 100%;
    }
}
.wrapper__table {
  width: 100%;
  p{
      text-align: center;
  }
  .cart{
      display: flex;
     
      justify-content: center;
  }
}
.content__table {
  width: 100%;
  min-width: 720px;
  margin: 50px 0;
  border-collapse: collapse;
}
.icons__flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  i {
    cursor: pointer;
    margin-right: 5px;
    &:hover {
      opacity: 0.7;
    }
  }
  i:nth-child(2) {
    padding-top: 5px;
  }
}
.btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid $main-color;
  color: $main-color;
  cursor: pointer;
  font-weight: bold;
  transition: all 300ms linear;
  &:hover {
    background-color: $main-color;
    color: #fff;
  }
  margin-bottom: 10px;
}
.btn__add {
  align-self: flex-start;
}
.btn__submit {
  margin-top: 10px;
}
// popup
.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.548);
  left: 0;
  right: 0;
  bottom: 0;
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    justify-content: center;
    padding: 30px;
    border-radius: 5px;
    background-color: #fff;
    h3 {
      text-align: center;
      margin-bottom: 5px;
    }
    form {
      display: flex;
      flex-direction: column;
      transition: all 300ms linear;
      input {
        padding: 10px;
        outline: none;
        &:focus {
          border: 1px solid rgb(105, 175, 0);
        }
      }
    }
    &__close {
      position: absolute;
      right: -10px;
      top: -30px;
      border: none;
      background-color: transparent;
      font-size: 24px;
      cursor: pointer;
      opacity: 0.7;
      i {
        color: red;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
}
// adaptive
@media (max-width: 991px) {
  .wrapper__table {
    overflow-x: scroll;
  }
  .btn {
    margin: 0 auto;
  }
}

$color-scroll: rgb(109, 104, 104)  ;

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
