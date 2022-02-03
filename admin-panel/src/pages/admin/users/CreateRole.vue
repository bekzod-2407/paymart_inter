<template>
    <div class="add">
        <form class="form" @submit.prevent="users" @validated="onValidated"> 
            <h2>{{$t('user.role_create')}}</h2>
            <vue-form-generator
                :schema="schema"
                :model="model"
                :options="formOptions"
            >
            </vue-form-generator>

            <p class="error" v-if="error.length > 0">{{error}}</p>

            <div 
                v-if="permissions.length > 0"
                class="permissions"
            >
                <span
                    v-for="(permission, index) in permissions" 
                    :key="index"
                    class="permission"
                >
                    {{permissionsName.find(per => per.id === permission.id).name}}
                    <i class="fa fa-close"
                        @click="removePermission(index)"
                    >

                    </i>
                </span>
            </div>

        </form>
    </div>
</template>

<script>
import axios from 'axios'
import VueFormGenerator from 'vue-form-generator'
import i18n from '../../../i18n/i18n'
import { mapGetters } from 'vuex'

export default {
    name: 'CreateRole',
    data(){
        return{
            model: {
               name: '',
               permission: '',
            },
            schema: {
                fields: []
            },
            formOptions: {
                validateAfterChanged: true,
            },
            permissions: [],
            permissionsName: [],
            error: ""
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
        removePermission(id){
            this.permissions = this.permissions.filter((per, idx) => idx !== id)
        },
        fillSchemaFields($this ,data){
            this.schema.fields = [
            {
                type: 'input',
                inputType: 'text',
                required: true,
                label: i18n.t('user.role_name'),
                model: 'name',
                validator: VueFormGenerator.validators.string.locale({
                    fieldIsRequired: i18n.t('user.role_input_validate'),
                })
            },
            {
                type: 'select',
                inputType: 'text',
                required: false,
                label: i18n.t('user.role_permissions'),
                model: 'permission',
                values:  function() {
                    return [...data]
                },
                buttons: [
                    {
                        classes: "btn-location",
                        label: i18n.t('user.role_btn_add'),
                        onclick: function(model) {

                            if(model.permission === ''){
                                $this.error = i18n.t('user.role_error_empty')
                                setTimeout(() => {
                                    $this.error = ''
                                }, 2000)
                                return 

                            }else if($this.permissions.length > 0 && $this.permissions.find(per => per.id === model.permission)){
                                $this.error = i18n.t('user.role_error_repeat')
                                setTimeout(() => {
                                    $this.error = ''
                                }, 2000)
                                return
                            }
                            $this.permissions = [...$this.permissions, {id: model.permission}]

                            model.permission = ''

                        }
                    },
                ]
            },
            {
                type: 'submit',
                buttonText: i18n.t('user.role_btn_create'),
                async onSubmit(model){
                    // соберем данные тут по названия 
                    const data = {
                        name: model.name,
                        permissions: $this.permissions
                    }
                    
                    try{
                        await $this.$axios.post(`/api/dashboard/roles`, data);
                        // clear inputs 
                        model.name = ''
                        model.permission = ''
                        $this.permissions = ''
                    }catch(err){
                        $this.error = err.response.data.message
                    }
                    
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
    async created(){
        const $this = this;
        const {data} = await axios.get('http://market.local/api/dashboard/permissions')
        this.permissionsName = data
        this.fillSchemaFields($this, data)
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
            margin: 0 -20px;
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
    .permissions{
        align-items: center;
        display: flex;
        flex-wrap: wrap;
    }
    p{
        padding: 0 10px;
    }
    .permission{
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
    }
    i {
        cursor: pointer;
        margin-left: 10px;
    }
    .error{
        color: red;
    }
</style>