<template>
  <div class="wrapper">
    <home-header />
    <MyBrandCrumb ></MyBrandCrumb>
    <router-view />
    <home-footer />
  </div>
</template>

<script>
import HomeFooter from "../components/home/HomeFooter.vue";
import HomeHeader from "../components/home/HomeHeader.vue";
import MyBrandCrumb from "../components/home/MyBrandCrumb.vue";

export default {
  components: {
    HomeFooter,
    HomeHeader,
    MyBrandCrumb,
  },
  name: "EasyLayout",
};
</script>