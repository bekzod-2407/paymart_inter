<template>
    <div class="cart-item">
        <div class="item-info">
            <img 
                :src="imgUrl"
            />
            Название товара: <br/>
            {{this.name}}
        </div>
        <div>
            Количество товара: 
            <strong>
                {{this.amount}}
            </strong>
        </div>
        <button class="cart-remove" @click="removeItem">
            Удалить
           
        </button>
    </div>
</template>
<script>
import config from '../config'
export default {
    props: ['name', 'price', 'amount', 'productId', 'image', 'cartId'],
    data(){
        return{
            imgUrl: this.image ? `${config.URL}/storage/product_images/${this.productId}/${this.image.name}` : 'https://shoppovia.com/store-front/images/product-default.png'
        }
    },
    methods: {
        async removeItem(){
            try{
                const resp = await this.$axios.delete(`api/cart/${this.cartId}`);
                if(resp.data === "Successful"){
                    this.$emit('removeItem', this.cartId)
                    this.$store.dispatch('cart/removeCartItem', this.productId)
                }else{
                    alert('Не удалось удалить продукт')
                }
            }catch(err){
                if(err){
                    console.log(err);
                    alert('Не удалось удалить продукт')
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .cart{
        img{
            height:100px;
            width: 100px;
            object-fit: contain;
        }
        .item-info{
            display: flex;
            align-items: center;
        }
        &-item{
            padding: 20px;
            border: 1px solid #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0 ;
        }
        &-remove{
            border-radius: 5px;
            padding: 10px 15px;
            border: 1px solid red;
            background-color: red;
            color: #fff;
            cursor: pointer;
            &:hover{
                transition: all 300ms linear;
                box-shadow: 0 0 3px red;
            }
        }
    }
</style>