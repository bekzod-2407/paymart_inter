<template>
   <div class="wrapper">
        <div class="row">
            <router-view/>
        </div>
    </div>
</template>
<script>

export default {
    name: "EmptyLayout",
 
}
</script>
<style lang="scss">
    .fa{
        color: black;
    }
    .row{
        display: flex;
        width: 100%;
    }
    .content-wrapper{
        z-index: 200;
        margin-left: auto;
        width: calc(100vw - 260px);
        transition: all 300ms linear;
    }
    .content-full{
        z-index: 200;
        margin-left: auto;
        transition: all 300ms linear;
        width: calc(100vw - 74px);
    }
</style>