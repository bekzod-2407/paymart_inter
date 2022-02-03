<template>
  <div class="checkout-component">
    <h3>Categories</h3>
    <div class="item" v-for="category in categories"
                    :key="category.id"
                    :name="category.name"
                    >
      <label>
        <input type="checkbox" class="hidden" @change="setCat($event  ,category.id)">
        <div class="box">
          <i class="fa fa-check"></i>
        </div>
      </label>
      <p>{{category.name}}</p>
      <span>({{category.product.length}})</span>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    "checkedCat",
  ],
  data(){
    return{
      categories:[],
    }
  },
  methods:{
    setCat(event,name){
      this.$emit('setCategory',event.target.checked,name)
    }
  },
  async created(){
    const prod_categories = await this.$axios.get(`/api/categories`)
    this.categories = prod_categories.data
    //console.log(prod_categories.data)
    //console.log(this.checkedCat)
  },
}
</script>

<style lang='scss' scoped>
  @import '../../assets/main-styles.scss';
  .checkout-component{
    margin-bottom: 30px;
    h3{
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 30px;
    }
    .item{
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      input:checked ~ .box{
        background-color: $color-1;
        border:1px solid $color-1;
        i{
          opacity: 1;
        }
      }
      .box{
        margin-right: 10px;
        height: 20px;
        width: 20px;
        border:1px solid #E4E7ED;
        display: flex;
        align-items: center;
        justify-content: center;
        transition:all 0.3s ease;
        i{
          color:white;
          transition: all 0.3s ease;
          opacity: 0;
        }
      }
    }
  }
</style>