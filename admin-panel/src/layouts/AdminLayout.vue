<template>
   <div class="wrapper">
        <div class="row">
            <admin-sidebar/>
            <div :class="(isActive) ? 'content-wrapper' : 'content-full'">
                <admin-header @onToggle="onToggleIcon" :isActive="isActive"/>
                <router-view/>
                <custom-loader v-show="isLoading"/>  
            </div>
        </div>
    </div>
</template>

<script>
import AdminHeader from '../components/admin-panel/AdminHeader.vue'
import AdminSidebar from '../components/admin-panel/AdminSidebar.vue'
import loaderMixin from '../mixins/loader.mixin.js'
import CustomLoader from '../components/CustomLoader.vue'

export default {
    name: "AdminLayout",
    mixins: [loaderMixin],
    components: { AdminHeader, AdminSidebar, CustomLoader},
    data(){
        return {
            isActive: true
        }
    },
    methods: {
        onToggleIcon(){
            this.isActive = !this.isActive
        }
    },
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