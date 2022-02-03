<template>
  <div>
      <div class="content">
          <div class="product">
              <p class="create-ap">Дата создания: {{this.product.createdAt}}</p>
              <div class="img">
                   <img :src=" this.product.img" alt="">
              </div>

              <h3>{{ this.product.name}}</h3>
              <h5> by {{this.product.brand}}</h5>
                <div class="btns">
                    <button @click="$router.push({name: 'admin.products.edit', params: {id: product.id}})" class="btn edit">Edit</button>
                    <button @click="deleteProduct(product.id)" class="btn delete">Delete</button>
                </div>
              
          </div>
      </div>
  </div>
</template>

<script>

export default {
     name: "viewProduct",
data(){
    return{
        product:{}
    }

},
methods:{
    async deleteProduct(id){
        if(window.confirm('Delete this Product??')){
          // eslint-disable-next-line no-undef
          await this.$axios.delete(`/api/dashboard/products/${id}`)
          this.$router.push({name: 'admin.products.test'})  
        }
        

    }
},
async created(){
    const {data} = await this.$axios.get(`/api/dashboard/products/${this.$route.params.id}`)
    this.product = data
}
}
</script>

<style lang="scss" scoped>
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
.product{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 

}
.img{
    width: 300px;
    min-height: 300px;
    height: auto;
    background: grey;
    img{
        width: 100%;
    }
}
.btn{ margin: auto 15px;
    padding: 12px 50px;
    color: white;
    text-transform: uppercase;
    font-weight: 20px;
    font-weight: bold;
    margin-top: 30px;
    cursor: pointer;
    border: none;
    

}
.edit{
         background: teal;
    }
    .delete{
        background: red;
    }


</style>