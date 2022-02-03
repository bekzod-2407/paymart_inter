<template>
  <div class="content">
    <vuetable
    :data="brands"
    :fields="fields"
    :api-mode='false'
    :per-page="5"
    >
      <template slot='actions' slot-scope="props">
        <div class="flex-wrapper">
        <i class="fa fa-search-plus" @click="$router.push({name:'admin.brands.view', params:{id:props.rowData.id}})"></i>
        <i class="fa fa-edit" @click="$router.push({name:'admin.brands.edit', params:{id:props.rowData.id}})"></i>
        <i class="fa fa-close" @click='removeCategory(props.rowData.id)'></i>
        </div>
      </template>
    </vuetable>
    <!-- pagination -->
    <div class="pagination">
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
</template>

<script>

import Vuetable from 'vuetable-2'
import brandFields from '../../../utils-vuetable/brands-vuetable/field'

export default {
  components:{
    Vuetable
  },
  data(){
    return{
      brands:[],
      fields:brandFields(this.$i18n),
      perPage: 5,
      page: 1,
      totalPages: ""
    }
  },
  async created(){
    
    const {data} = await this.$axios.get(`/api/dashboard/brands`)
    this.brands = data
  },
  async mounted(){
    await this.fetchData();
  },
  watch: {
    page() {
      this.fetchData()
    },
    // brands(){
    //   this.fetchData()
    // }
  },
  methods:{
    async removeCategory(id){
      if(window.confirm("Are you sure that you want to delete brand?")){
        await  this.$axios.delete(`/api/dashboard/brands/${id}`)
        this.fetchData()
      }
    },
    changePage(pageNumber){
      this.page = pageNumber
    },
    async fetchData(){
        const resp = await this.$axios.get(`/api/dashboard/brands`,{
        params: {
          limit: 5,
          page: this.page
        }})
        console.log(resp);
        this.totalPages = Math.ceil(resp.data.meta.total / this.perPage)
        this.brands = resp.data.data
    }
  }
}
</script>

<style lang='scss' scoped>
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
  img{
    max-width:100%;
  }
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
  .flex-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    i{
      font-size: 20px;
      margin-left: 10px;
      margin-right: 10px;
      display: block;
      cursor: pointer;
    }
  }
</style>