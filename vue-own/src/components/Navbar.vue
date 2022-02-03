<template>
  <nav>
    <ul>
      <router-link 
        tag="li" 
        :to='{ name: link.name }' 
        v-for="(link, index) in links" 
        :key="index"
    >
        {{ link.text }}                
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        {
          name: 'home',
          text: 'Home Page'
        },
        {
          name: 'about',
          text: 'About Page'
        },
        {
          name: 'newpage',
          text: 'New Page'
        }
      ]
    }
  },
}
</script>

<style lang="scss">
  li{
    cursor: pointer;
    transition:all 0.3s ease;
    list-style: none;
    &:hover{
      color:#42b983;
    }
  }
  .router-link-exact-active{
    color:#42b983;
  }
</style>