<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import AdminLayout from './layouts/AdminLayout.vue';
import EmptyLayout from './layouts/EmptyLayout.vue';
import HomeLayout from './layouts/HomeLayout.vue';
import EasyLayout from './layouts/EasyLayout.vue';
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import CustomLoader from './components/CustomLoader.vue'

export default {
  name: "App",
  components: {
    AdminLayout,
    EmptyLayout,
    HomeLayout,
    EasyLayout,
    CustomLoader,
  },
  computed: {
    layout(){
      return (this.$route.meta.layout || 'empty') + '-layout';
    },
  },
  async created(){

  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap');
  
  $green-color:#72E019;
  $green-shadow: #64c515;

  // ОБНУЛЕНИЕ
  p,h1,h2,h3,h4,h5{
    padding: 0;
    margin: 0;
  }
  fieldset{
    border: none;
  }

  .vue-form-generator{
    .field-wrap{
      input{
        padding: 10px !important;
        outline: none;
        &:hover{
          border-color: $green-color;
        }
      }
      select{
        padding: 12px;
        line-height: 1.4;
        outline: none;
        &:focus{
          border-color: $green-color;
        }
      }
      button{
        padding: 10px !important;
        line-height: 14px;
      }
      textarea {
        resize: none;
      }
      input[type="submit"]{
        padding: 10px !important;
        background-color: $green-color !important;
        border-color: $green-color !important;
        outline: none !important;
        box-shadow: none !important;
        min-width: 120px;
        line-height: 14px;
      }

      .wrapper{
        width: 100%;
      }
      
    }
  }
  // homePage 
  .container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    @media(min-width:768px){
      width: 750px;
    }
    @media(min-width: 992px){
      width: 980px;
    }
    @media(min-width:1200px){
      width: 1170px;
    }
  }
   .test-wrapper{
    .vuetable-td-size{
        color: teal;
        text-align: center !important;
        font-size: 20px;
        font-weight: 900;
    }
    .vuetable-td-color{
        color: teal;
        text-align: center !important;
        font-size: 20px;
        font-weight: bold;
    }
}
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: Montserrat;
 }
  fieldset{
    border:none ;
  }
  .content{
    height: calc(100vh - 100px);
    background: rgb(238, 238, 238);
    overflow-y: auto;
    padding: 30px;
  }
//  ============================= scroll ====================================
$color-scroll: rgba(255, 255, 255, 0.452) ;
  // CHROME
::-webkit-scrollbar{
  width:5px;
  position: absolute;
  height: 5px;
}

 ::-webkit-scrollbar-thumb{
   border-radius: 5px;
   z-index: 500;
  background-color: lighten($color-scroll, 0%);
}
::-webkit-scrollbar-thumb:hover{
  background-color: darken($color-scroll, 5%);
} 
::-webkit-scrollbar-thumb:active{
  background-color: darken($color-scroll, 10%);
} 
::-webkit-scrollbar-track-piece{
  background-color: black;
}
// OPERA
::-o-scrollbar{
  width:5px;
  position: absolute;
}
::-o-scrollbar-thumb{
  z-index: 500;
  border-radius: 5px;
  background-color: lighten($color-scroll, 5%);
}
::-o-scrollbar-thumb:hover{
  background-color: darken($color-scroll, 5%);
} 
::-o-scrollbar-thumb:active{
  background-color: darken($color-scroll, 10%);
}
::-o-scrollbar-track-piece{
  background-color: rgba(black, 0.5);
}
</style>
