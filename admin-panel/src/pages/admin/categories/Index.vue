<template>
    <div class="content">
        <h1>{{$t('category.category_title')}}</h1> 
        <button 
            class="btn btn__add"
            @click="$router.push({name: 'admin.categories.create'})"
        >
            {{$t('category.table_create')}}
        </button>
        <!-- table -->
        <div class="wrapper__table" :style="{marginTop: '20px'}">
          
            <vuetable 
                :data="categoriesData"
                :api-mode="false"
                :fields="fields"
            >
                <template slot="actions" slot-scope="props">
                    <div class="icons__flex">
                        <i 
                            class="fa fa-search-plus" 
                            @click="$router.push({name: 'admin.categories.view', params: {id: props.rowData.id}})"
                        >
                        </i>
                        <i 
                            class="fa fa-edit" 
                            @click="$router.push({name: 'admin.categories.edit', params: {id: props.rowData.id}})"
                        >
                        </i>
                        <i 
                            class="fa fa-close" 
                            @click="removeCategory(props.rowData)"
                        >
                        </i>
                    </div>
                </template>

        </vuetable>

        <!-- pagination -->
        <div class="pagination" v-if="this.totalPages > 1" >
            <button 
                v-for="pageNumber in this.totalPages" 
                :key="pageNumber"  
                @click="changePage(pageNumber)"
                :class="{
                    'btn__active': page ===pageNumber
                }"
            >
                {{pageNumber}}
            </button>
        </div>
            
        </div>
    </div>
</template>

<script>
import Vuetable  from 'vuetable-2';
import TableFields from './TableFields';

export default {
    name: "categories",
    components: {
        Vuetable,
    },
    data(){
        return{
            fields: TableFields(this.$i18n),
            categoriesData: [],
            perPage: 5,
            page: 1,
            totalPages: ""
        }
    },
    async mounted(){
        await this.fetchData();
    },
    watch: {
        page() {
            this.fetchData()
        },
    },
    methods: {
        async removeCategory({id}) {
            if (window.confirm("Вы точно хотите удалить ?")) {
                await this.$axios.delete(`/api/dashboard/categories/${id}`)
                this.fetchData()
            }
        }, 
        changePage(pageNumber) {
            this.page = pageNumber
        },
        async fetchData(){
            const resp = await this.$axios.get(`/api/dashboard/categories`,{
            params: {
                limit: this.perPage,
                page: this.page
            }})
            this.totalPages = Math.ceil(resp.data.meta.total / this.perPage)
            this.categoriesData = resp.data.data
        }
      // end methods ==================================================================
    },
}
</script>

<style lang="scss" scoped>
    $main-color: rgb(31, 7, 110);

    .vuetable-body-wrapper{
        min-height: 300px;
    }

    .icons__flex{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 22px;
        i{
            font-size: 22px;
            margin: 0 10px;
            cursor: pointer;
            margin-right: 5px;
            
            &:hover{
                opacity: .7;
            }
        }
        i:nth-child(1){
            padding-top: 3px;
            color: $main-color;
        }
        i:nth-child(2){
            padding-top: 5px;
            color: green;
        }
        i:nth-child(3){
            padding-top: 5px;
            color: red;
        }
    }

    .btn{
        margin-top: 20px;
        padding: 10px 20px;
        background-color: transparent;
        border: 1px solid $main-color;
        color: $main-color;
        cursor: pointer;
        font-weight: bold;
        transition: all 300ms linear;
        border-radius: 5px;
        margin-bottom: 10px;
        &:hover{
            box-shadow: 0 0 3px $main-color;
            background-color: $main-color;
            color: #fff;
        }
        &:active{
            position: relative;
            top: 5px;
        }
    }
    

    // pagination
    .pagination{
        display: flex;
        margin-top: 10px;
        margin: 10px -10px;
        justify-content: flex-end;
        button{
            color: rgb(117, 117, 117);
            padding: 10px;
            margin: 0 5px;
            cursor: pointer;
            border-radius: 4px;
            border: 2px solid rgb(117, 117, 117);
        }
    }
    .btn__active{
        border: 2px solid $main-color !important;
        color: $main-color !important;
        font-weight: bold;
        box-shadow: 0 0 3px $main-color;
        transition: all 100ms linear;
    }
    // adaptive
    @media (max-width: 991px) {
        .wrapper__table{
            overflow-x: scroll;
        }
        .btn{
            margin: 0 auto;
        }
    }
</style>