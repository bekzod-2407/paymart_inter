<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>

  export default {
    created(){
      document.title = this.$route.meta.title;
    }
  }
</script>
<style scoped lang='scss'>
  li{
    cursor:pointer;
  }
</style>