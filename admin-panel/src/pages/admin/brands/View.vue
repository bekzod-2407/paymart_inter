<template>
  <div class="content">
    <div class="item">
      <img :src="this.brandByID.image" alt="">
      <h3>{{this.brandByID.name}}</h3>
    </div>
    <div class="change-buttons">
      <span class="btn-def" @click="$router.push({name: 'admin.brands'})">
        <p>{{$t('viewButton.name')}}</p>
      </span>
      <!-- <span class="btn-def" @click="removeCategory(brandByID.id)">
        <p>Delete</p>
      </span> -->
    </div>
  </div>
</template>

<script>
import config from '../../../config'
import axios from 'axios'
export default {
  data(){
    return{
      brandByID:{}
    }
  },
  methods:{
    // async removeCategory(id){
    //   if(window.confirm("Are you sure that you want to delete brand?")){
    //     await axios.delete(`https://marketpaymart.herokuapp.com/api/dashboard/brands/${id}`)
    //     this.$router.push({name: 'admin.brands'})
    //   }

    // }
  },
  async created(){
    const {data} = await axios.get(`${config.URL.dev}/api/dashboard/brands/${this.$route.params.id}`)
    this.brandByID = data
  }
}
</script>

<style lang='scss' scoped>
  .item{
    margin-bottom: 20px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    img{
      margin-bottom: 30px;
      max-width: 100%;
    }
  }
  .change-buttons{
    display: flex;
    justify-content: center;
    .btn-def{
      display:flex;
      align-items:center;
      justify-content: center;
      height: 50px;
      padding: 5px 20px;
      border:1px solid black;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover{
        background-color: black;
        color:white;
      }
      &:first-child{
        margin-right: 20px;
      }
    }
  }
</style>