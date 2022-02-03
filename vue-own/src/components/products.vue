<template>
  <div class="product-wrapper">
    <div class="product" v-bind:style='{backgroundColor:product.color}'>
      {{product.name}}
      <p>{{product.price}}</p>
      <slot name="test"></slot>
      <button @click="$router.push({ name: 'cardpage', params: { id: product.id } })">{{product.name}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang='scss'>
  .product-wrapper{
    width: 33.3%;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;
    .product{
      padding: 20px;
      outline:1px solid black;
    }  
  }
</style>