<template>
    <div class="view">
        <h2 v-if="this.categoryById !== null">Страница: {{this.categoryById[0].name}}</h2>
        <vuetable
            :data="categoryById"
            :fields="fields"
            :api-mode="false"
        >
            <template slot="actions">
                <button  @click="$router.push({name: 'admin.categories'})">Back</button>
            </template>
        </vuetable>
    </div>
</template>
<script>
import axios from 'axios'
import Vuetable from 'vuetable-2'
import TableFields from './TableFields';
export default {
    components: {
        Vuetable
    },
    data(){
        return{
            categoryById: null,
            fields: TableFields(this.$i18n)
        }
    },
    async created(){
        const {data} = await axios.get(`https://marketpaymart.herokuapp.com/api/dashboard/categories/${this.$route.params.id}`)
        this.categoryById = [data]
    }
}
</script>

<style scoped lang="scss">
    $back-color: rgb(31, 7, 110);
    .view{
        padding: 50px;
        width: 100%;
        height: calc(100vh - 100px);
        background-color: #fff;
        form{
            display: flex;
            flex-direction: column;
            width: 700px;
            margin: auto;
        }
    }
    button{
        width: 100%;
        padding: 10px;
        border: 1px solid $back-color;
        background-color: transparent;
        color: $back-color;
        cursor: pointer;
        transition: all 300ms linear;
        border-radius: 3px;
        &:hover{
            background-color: $back-color;
            color: #fff;
        }
    }
</style>