<template>
    <div class="add">
        <form class="form" @submit.prevent="createCategory" @validated="onValidated"> 
            <h2>{{$t('category.add_title')}}</h2>
            <vue-form-generator
                :schema="schema"
                :model="model"
                :options="formOptions"
            >
            </vue-form-generator>
        </form>
    </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator'
import i18n from '../../../i18n/i18n'
import { mapGetters } from 'vuex'
export default {
    name: 'createCategory',
    data(){
        return{
            model: {
               name: '',
               icon_name: '',
               created_at: Date.now()
            },
            schema: {
                fields: []
            },
            formOptions: {
                validateAfterChanged: true,
            }
        }
    },
    methods: {
        async createCategory(){
            await this.$axios.post(`/api/dashboard/categories`, this.model);
            this.$router.push({name: 'admin.categories'});
        },
        onValidated(isValid, errors) {
            console.log("Validation result: ", isValid, ", Errors:", errors);
        },
        fillSchemaFields($this){
            this.schema.fields = [
                {
                    type: 'input',
                    inputType: 'text',
                    required: true,
                    label: i18n.t('category.category_name'),
                    model: 'name',
                    validator: VueFormGenerator.validators.string.locale({
                        fieldIsRequired: "Поля не может быть пустым",
                        textTooSmall: ""
                    })
                },
                {
                    type: 'input',
                    inputType: 'text',
                    required: false,
                    label: i18n.t('category.category_icon'),
                    model: 'icon_name',
                },
                {
                    type: 'submit',
                    buttonText: i18n.t('category.category_btn'),
                    async onSubmit(model){
                        await $this.$axios.post(`/api/dashboard/categories`, model);
                        $this.$router.push({name: 'admin.categories'});
                    },
                    label: '',
                    validateBeforeSubmit: true
                }
            ];
        }
    },
    computed: {
        ...mapGetters({
            langChanged: 'lang/langChanged'
        }),
    },
    watch: {
        langChanged(){
            this.fillSchemaFields()
        }
    },
    created(){
        const $this = this;
        this.fillSchemaFields($this)
    }
}
</script>

<style lang="scss" scoped>
    $main-color: rgb(31, 7, 110);
    .add{
        width: 100%;
        height: calc(100vh - 100px);
        background-color: #fff;
        .form {
            border: none !important;
            display: flex;
            flex-direction: column;
            h2{
                padding: 20px 0;
                text-align: center;
            }
            width: 600px;
            margin: auto;
            
        }
    }
    .form__input{
        background-color: red;
        width: 100% !important;
        height: 50px !important;
        padding: 10px !important;
        outline: none;
        transition: all 200ms ease-in;
        margin-top: 10px;
        border: none;
        box-shadow: none;
        border-bottom: 1px solid #ccc;
        &:focus{
            border-bottom: 1px solid rgb(0, 167, 56);
        }
    }
    .add__btn{
        font-weight: 300;
        align-self: flex-end;
        transition: all 300ms linear;
        width: 30%;
        padding: 10px;
        border: 1px solid $main-color;
        background-color: transparent;
        color: rgb$main-color;
        margin: 10px 0;
        cursor: pointer;
        color: $main-color;
        &:hover{
            background-color: $main-color;
            color: #fff;
        }
    }
</style>