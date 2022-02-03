<template >
  <section class="selling">
    <div class="container">
      <div class="row">
        <div class="small-carousel" v-for="i in 3" :key="i">
          <h2>Top Selling</h2>
          <Carousel
            :perPageCustom="[[500, 1]]"
            :paginationEnabled="false"
            :navigationEnabled="true"
            :autoplay="true"
            :autoplayTimeout="2000"
            :autoplayHoverPause="true"
            :loop="true"
            :perPage="3"
            v-if="products1.length > 1 && categories.length > 1"
          >
            <Slide>
              <product-item
                v-for="product in products1"
                :key="product.id"
                :name="product.name"
                :price="product.price"
                :image="product.image[0]"
                :productId="product.id"
                :category="categories.find(item => item.id === product.category_id).name !== '' ? categories.find(item => item.id === product.category_id).name : 'no-category'"
              />
            </Slide>
            <Slide>
              <product-item
                v-for="product in products2"
                :key="product.id"
                :name="product.name"
                :price="product.price"
                :image="product.image[0]"
                :productId="product.id"
                :category="categories.find(item => item.id === product.category_id).name !== '' ? categories.find(item => item.id === product.category_id).name : 'no-category'"
              />
            </Slide>
            <Slide >
              <product-item
                v-for="product in products3"
                :key="product.id"
                :name="product.name"
                :price="product.price"
                :image="product.image[0]"
                :productId="product.id"
                :category="categories.find(item => item.id === product.category_id).name !== '' ? categories.find(item => item.id === product.category_id).name : 'no-category'"
              />
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ProductItem from "../components/home/ProductItem.vue";
import { Carousel, Slide } from "vue-carousel";
export default {
  components: { ProductItem, Slide, Carousel },
  data() {
    return {
      products1: [],
      products2: [],
      products3: [],
      categories: [],
      category: ''
    };
  },
  async created() {
    try {
      const resp = await this.$axios.get(`/api/products`);
      this.products1 = resp.data.sort(()=>Math.random()-0.5).slice(0, 3);
      this.products2 = resp.data.sort(()=>Math.random()-0.5).slice(0, 3);
      this.products3 = resp.data.sort(()=>Math.random()-0.5).slice(0, 3);

      const categoriesData = await this.$axios.get("/api/categories");
      this.categories = categoriesData.data

    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style lang="scss" >
.VueCarousel-navigation-button {
  z-index: 99;
  top: -5% !important;
}
.VueCarousel-navigation > button {
  left: 75% !important;
}
.row{
  flex-wrap:wrap;
}
.small-carousel{
  width: 33.3%;
}
</style>