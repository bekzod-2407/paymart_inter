<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'home'}">Home</router-link> |
      <router-link :to="{name: 'about'}">About</router-link> |
      <router-link :to="{name: 'newpage'}">New Page</router-link>
    </div>
    <component :is='layout'>
      <router-view></router-view>
    </component>
  </div>
</template>
<script>
import EmptyLayout from './layouts/EmptyLayout.vue'
import MainLayout from './layouts/MainLayout.vue'

export default ({
 components:{
   EmptyLayout,
   MainLayout
 },
 computed:{
   layout(){
     return(this.$route.meta.layout || 'empty') + '-layout';
   }
 }
})
</script>

<style lang="scss">
*{
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>