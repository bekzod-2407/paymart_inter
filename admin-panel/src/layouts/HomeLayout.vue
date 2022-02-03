<template>
  <div class="wrapper">
    <home-header />
    <my-header-nav />
    <MyBrandCrumb></MyBrandCrumb>
    <router-view />
    <section-subscribe />
    <section-navigation />
    <home-footer />
    <custom-loader v-show="isLoading"/>  
  </div>
</template>

<script>
import HomeFooter from "../components/home/HomeFooter.vue";
import HomeHeader from "../components/home/HomeHeader.vue";
import MyHeaderNav from "../components/home/MyHeaderNav.vue";
import MyBrandCrumb from "../components/home/MyBrandCrumb.vue";
import SectionNavigation from "../sections/SectionNavigation.vue";
import SectionSubscribe from "../sections/SectionSubscribe.vue";
import loaderMixin from '../mixins/loader.mixin.js'
import CustomLoader from '../components/CustomLoader.vue'

export default {
  mixins: [loaderMixin],
  components: {
    HomeFooter,
    HomeHeader,
    MyHeaderNav,
    SectionNavigation,
    SectionSubscribe,
    MyBrandCrumb,
    CustomLoader,
  },
  name: "HomeLayout",
};
</script>