<template>
    <div class="wrapper" >

        <section-collection />

        <section-products />

        <my-promotion/>

        <section-selling />

    </div>
</template>

<script>

import MyPromotion from '../components/home/MyPromotion.vue'
import SectionCollection from '../sections/SectionCollection.vue'
import SectionProducts from '../sections/SectionProducts.vue'
import SectionSelling from '../sections/SectionSelling.vue'

export default {
    name: "home",
    components: { 
        MyPromotion,
        SectionCollection,
        SectionProducts,
        SectionSelling,
    },
    data: () => ({
        
    }),

}


</script>

<style scoped lang="scss" >
.wrapper{
    margin: 0 auto;
}
    .row{
        display: flex;
        justify-content: space-between;
    }
    .small-carousel{
        width:33.333%;

    }
    // collections ========================================================
    .collection{
        margin: 50px 0;
    }

    // products ==========================================================
    .products{
        margin: 50px 0; 
    }

    // selling ==========================================================
    .selling{
        margin: 50px 0;
    }

    .subscribe{
        margin: 50px 0;
    }


</style>