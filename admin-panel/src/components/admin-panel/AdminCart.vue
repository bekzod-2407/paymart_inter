<template>
<div class="user__card" >
          <div :class="(className) ? `user__card-username ${className}` : 'user__card-username' ">
            <h1>{{name}} <p>{{items.length}}</p></h1>
          </div>
        </div>
</template>

<script>
export default {
    props: ['items', 'className', 'name']
}
</script>

<style lang="scss" scoped>
  h1{
      font-weight: bold;
      color: #000;
      text-transform: uppercase;
      p{
          color: red;
      }
  }
</style>
