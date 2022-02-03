<template>
  <div class="content">
    <div class="all-items">
      <div class="item-wrapper" v-for="brand in brands" :key='brand.id'>
        <div class="item" @click='$router.push({name: "admin.brands.view", params:{id: brand.id}})'>
          <div class="img-content">
            <img :src="brand.image" alt="" >
          </div>
          <div class="name-desc">
            <h3>{{brand.name}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      brands:[],
    }
  },
  async created(){
    const {data} = await axios.get('https://61ade31fd228a9001703b022.mockapi.io/api/brands')
    this.brands = data
  }
}
</script>

<style lang='scss' scoped>
  .all-items{
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-wrap:wrap;
    .item-wrapper{
      margin-bottom: 30px;
      padding-left: 15px;
      padding-right: 15px;
      width: 33.3%;
      .item{
        cursor: pointer;
        img{
          max-width: 100%;
        }
        h3{
          text-align: center;
        }
      }
    }
  }
</style>