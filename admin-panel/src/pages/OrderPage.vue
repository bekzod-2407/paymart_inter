<template>
  <div class="container">
    <div class="order-wrapper">
      <h2 class="order-title">Ваши заказы</h2>
      <hr class="hr" />
      <div class="orders-wrapper">
        <div class="orders">
          <div class="order" v-for="order in orders" :key="order.id">
            <div>
              <p class="text order-id">Номер заказа: <span>{{ order.id }}</span> </p>
              <p class="text order-created">
                Время оформления заказа: <span>{{ order.created_at.slice(0,10) }} {{ order.created_at.slice(11,19) }} </span> 
              </p>
              <hr>
            </div>
            <div class="items d-flex">
              <div
                class="item-wrapper"
                v-for="item in order.user_order_items"
                :key="item.id"
              >

                <div class="item">
                  <div class="img"
                  :style="{ 
                  background: `url(${configURL}/storage/product_images/${item.product_name.image[0].product_id}/${item.product_name.image[0].name})`, 
                  backgroundSize: 'contain'
                }"
                  ></div>
                  <p class="text item-name">Название <br> {{item.product_name.name}}</p>
                  <p class="text item-amount">Колличество: {{item.amount}}</p>
                  <p class="text item-price">Цена: ${{item.price*item.amount}}</p>
                </div>
              </div>
            </div>

            <p class="order-items-total-price">Общая стоимость: ${{order.total_amount}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '../config';

export default {
  data() {
    return {
      configURL: config.URL,
      orders: "",
    };
  },
  async created() {
    const resp = await this.$axios.get("api/user_orders_list");
    this.orders = resp.data.user_order;
    // this.orders = this.orderItems.forEach(order => console.log(order.user_order_items))
    console.log(this.orderItems);
  },
};
</script>

<style lang="scss" scoped>
.text {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}
.w-auto {
  width: auto;
}
.w-100 {
  width: 100%;
}
.d-flex {
  display: flex;
}
.column {
  flex-direction: column;
}
.hr {
  margin-top: 20px;
  margin-bottom: 20px;
  height: 1px;
  background: #72e019;
}
.order-wrapper {
  
  .order-title {
    margin-top: 20px;
  }
  .order {
    border: 2px solid #a1a1a1;
    margin: 20px 10px;
    .order-id, .order-created{
      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;
      span{
        font-size: 13px;
        font-weight: normal;
      }
    }
  }
  .img {
    width: 150px;
    height: 150px;
    background: #000;
  }
  .item-wrapper{
    margin: 20px 10px;
    border: 1px solid #72e019;
    
  }
  .item{
      margin-top: 10px;
    }
  .order-items-total-price{
    text-transform: uppercase;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
