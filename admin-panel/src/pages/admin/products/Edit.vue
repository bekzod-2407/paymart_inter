<template>
  <div class="content">
     <form class="from" @submit.prevent="editProduct">
         <p>Ссылка для картинки:</p>
      <input 
        class="img" 
        placeholder="Введите ссылку картинки" 
        type="text" 
        v-model="product.img"
        
      />
      <p>Название продукта: {{product.name}}</p>
      <input class="name" placeholder="Введите название товара" type="text" v-model="product.name" />
      <p>Название бренда: {{product.brand}}</p>
      <input class="brand" placeholder="Введите фирму производителя" type="text" v-model="product.brand"/>
      <p>Изменение цвета: {{product.color}}</p>
      <input class="color" placeholder="Введите цвет" type="text" v-model="product.color" />
      <p>Размер: {{product.size}}</p>
      <input class="size" placeholder="Введите размер" type="text" v-model="product.size"/>
      <p>Цена: {{product.price}}</p>
      <input class="price" placeholder="Назовите цену" type="text" v-model="product.price"/>
      <button class="btn">Изменить</button>
    </form>
  </div>
</template>

<script>

export default {
    name:  "createProduct",
    data(){
        return{
          product:{}
        }
    },
    methods:{
      async editProduct(){
          await this.$axios.put(`/api/dashboard/products/${this.$route.params.id}`, this.product)
          this.$router.push({name: "admin.products.test"})
       }
        },
    async created(){
          const {data} = await this.$axios.get(`/api/dashboard/products/${this.$route.params.id}`)
          this.product = data
          console.log(data);
    
    }
}
</script>

<style lang='scss' scoped>
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
form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ::placeholder { 
            font-size: 18px;
            
            
          }
    input{
        font-size: 18px;
        padding-left: 15px;
        width: 500px;
        height: 50px;
        margin: 15px 0;
        border-radius: 7px;
        border: 2px solid teal;
        &:focus{
            outline: 3px solid teal;
        }
    }
    .btn{
        margin-top: 20px;
        cursor: pointer;
        padding: 10px 30px;
        background: teal;
        color: white;
        font-size: 18px;
        font-weight: bold;
        border: none;
        border-radius: 5px;
    }
}


</style>