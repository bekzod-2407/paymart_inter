<template>
  <div class="app-loader">
     <div class="ui segment">
      <div class="ui active inverted dimmer load">
        <div class="ui large text loader">Loading</div>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.ui.active.inverted.dimmer.load{
    background: #eeeeee !important;
    border: none;
    padding: 0 !important;
}
.ui.segment{
    margin-top: 20px;
    box-shadow: none;
    border: none;
}

</style>