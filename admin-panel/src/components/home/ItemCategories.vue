<template lang="">
    <div class="row">
        <h2>
            New Products
        </h2>
        <ul class="categories">
            <li v-for="category in this.categories" :key="category.id">
                {{category.name}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
   data(){
       return{
           categories: ['Laptops', 'SmartPhones', 'Cameras']
       }
    },
    async created(){
        try{
            const resp = await this.$axios.get(`/api/categories`)
            this.categories = resp.data
        }catch(err){
            console.log(err);
        }
    }
}
</script>
<style scoped lang="scss" >
    $green-color:#72E019;
    .row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0;
    }

    .categories{
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        li{
            margin: 0 10px;
            cursor: pointer;
            transition: all 300ms linear;
            position: relative;
            font-weight: bold;
            color: #1a1a1a;
            &::before{
                content: '';
                transition: width 300ms ease-in;
                position: absolute;
                bottom: -2px;
                width: 0;
                height: 2px;
                background-color: $green-color;
                border-radius: 5px;
            }
            &:hover{
                color: $green-color;
                &::before{
                    width: 100%;
                }
            }
            li.active{
                color: $green-color;
                border-bottom: 1px solid $green-color;
                
            }
        }
    }
</style>