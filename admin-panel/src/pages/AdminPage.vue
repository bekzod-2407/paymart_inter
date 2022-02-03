<template>
  <div class="content content-full">
    <div class="content__wrapper">
      <admin-cart :items="users" name="users" />
      <admin-cart :items="categories" name="categories" />
      <admin-cart :items="brands" name="brands" />
      <admin-cart :items="products" name="products" />
    </div>
  </div>
</template>
<script>

import AdminCart from "../components/admin-panel/AdminCart.vue";
export default {
  components: { AdminCart },
  name: "AdminPage",
  data() {
    return {
      isActive: true,

      users: "",
      categories: "",
      brands: "",
      products: "",
    };
  },
  async created() {
    const usersData = await this.$axios.get(`/api/dashboard/users`);
    this.users = usersData.data;
    const categoriesData = await this.$axios.get(
      `/api/dashboard/categories`
    );
    this.categories = categoriesData.data;
      const brandsData = await this.$axios.get(`/api/dashboard/brands`)
      this.brands = brandsData.data
      const productsData = await this.$axios.get(`/api/dashboard/products`)
      this.products = productsData.data
  },
  methods: {
    onToggleIcon() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style lang="scss" scoped>
 .content__wrapper{
    display: flex;
    max-width: 1100px;
    overflow-x: auto;
 }

.user__card {
    margin: 15px;
  background: #fff;
  max-width: 240px;
  min-width: 240px;
  height: 300px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 20px -10px rgba(rgb(73, 68, 68), 0.6);
  &:hover {
    margin-top: -5px;
    box-shadow: 0px 5px 20px -10px rgb(73 68 68 / 60%);
  }
  label {
    display: block;
    font-weight: bold;
    font-size: 16px;
  }
  p {
    margin-bottom: 5px;
  }
}
.categories {
  margin-top: 30px;
  h2 {
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .categories__card {
    background: #fff;
    max-width: 240px;
    height: 320px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: all 0.5s ease;
    box-shadow: 0px 0px 20px -10px rgba(rgb(73, 68, 68), 0.6);
    &:hover {
      margin-top: -5px;
      box-shadow: 0px 5px 20px -10px rgb(73 68 68 / 60%);
    }
  }
}
.d-flex {
  display: flex;
}

.fa {
  color: black;
}
.row {
  display: flex;
  width: 100%;
}
.content {
  z-index: 200;
  margin-left: auto;
  width: calc(100vw - 260px);
  transition: all 300ms linear;
}
.content-full {
  z-index: 200;
  margin-left: auto;
  transition: all 300ms linear;
  width: calc(100vw - 74px);
}
</style>
