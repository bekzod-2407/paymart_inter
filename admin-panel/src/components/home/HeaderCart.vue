<template>
  <div class="item">
    <div class="left-side">
      <img :src="imgUrl" :alt="item.name">
    </div>
    <div class="right-side">
      <div class="name">
        <h3>{{item.name}}</h3>
      </div>
      <div class="prod-info">
        <p>{{item.amount}}x</p>
        <h3>${{item.price}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import config from '../../config'
export default {
  props: ['item'],
  data(){
    return{
      imgUrl: this.item.image ? `${config.URL}/storage/product_images/${this.item.id}/${this.item.image.name}` : 'https://shoppovia.com/store-front/images/product-default.png'
    }
  },
}
</script>

<style lang='scss' scoped>
  .item{
    img{
      max-width: 100%;
    }
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 20px;
    &:first-child{
      margin-top: 0;
    }
    .left-side{
      width: 30%;
      margin-right: 5%;
    }
    .right-side{
      width: 65%;
      .prod-info{
        display: flex;
        align-items: center;
        h3{
          margin: 0;
        }
        p{
          margin: 0;
          margin-right: 20px;
        }
      }
    }
    .remove{
      position: absolute;
    }
  }
</style>