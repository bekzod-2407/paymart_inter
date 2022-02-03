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

.app-loader {
  z-index: 3333;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, .6);
}

.ui.active.inverted.dimmer.load{
    border: none;
    padding: 0 !important;
}
.ui.segment{
    margin-top: 20px;
    box-shadow: none;
    border: none;
    background: transparent;
}
.ui.inverted.dimmer {
  background-color: transparent;
}

.ui.inverted.dimmer .ui.loader:before {
  border-color: #72E019;
}

.ui.inverted.dimmer .ui.loader {
  color: #fff;
}
</style>