<template>
  <div class="content">
    <h2>{{$t('createPlaceholder.main')}}</h2>
    <!-- <form @submit.prevent="createBrand">
      <div class="form-wrapper">
        <input v-model="name" type="text" placeholder="Brand name" name='brand-name'>
        <input v-model='image' type="text" placeholder="Brand image" name='brand-image'>
        <label for="file">
          <input type="text" readonly name='file-name' placeholder="Brand image">
          <input type="file" class="hide" id="file" placeholder="brand image" name='brand-image' onchange="javascript:this.previousElementSibling.value = this.files[0].name">
          <span><p>Choose file</p></span>
        </label>
        <span class="btn-def">
          <button type='submit'>Create brand</button>
        </span>
      </div>
    </form> -->
    <form @submit.prevent="createBrand">
      <div class="form-wrapper">
        <vue-form-generator
        :schema="schema"
        :model="model"
        :options="formOptions"
        ></vue-form-generator>
        <!-- <span class="btn-def">
          <button type='submit'>Create brand</button>
        </span> -->
      </div>
    </form>
  </div>
</template>

<script>
import i18n from '../../../i18n/i18n'
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      model:{
        name:'',
      },
      schema: {
        fields: []
      },
      formOptions:{
        validateAfterLoad: false,
        validateAfterChange: true,
        validateBeforeSubmit:true,
        validateAsync: true,
      }
    }
  },
    methods:{
      fillFields($this){
        this.schema.fields = [
          {
            type: 'input',
            inputType: 'text',
            placeholder:i18n.t('createPlaceholder.name'),
            model: 'name',
            required: true,
            validator: 'string'
          },
          {
            type: 'submit',
            async onSubmit(model){
              await $this.$axios.post(`/api/dashboard/brands`, model)
              model.name = model.image = ''
              await $this.$router.push({ name: 'admin.brands' });
            },
            label: '',
            buttonText: i18n.t('createPlaceholder.button'),
            validateBeforeSubmit: true

          },
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
      this.fillFields()
    }
  },
  created() {
    const $this = this;
    this.fillFields($this);
  }
}
</script>

<style lang='scss' scoped>
  fieldset{
    border:none !important;
  }
  .content{
    h2{
      margin-bottom: 30px;
      text-align: center;
    }
    .form-wrapper{
      display: flex;
      align-items: center;
      flex-direction: column;
      #file{
        display:none;
      }
      .vue-form-generator{
        .form-control{
          height: 50px;
          padding: 5px 20px;
          border:none;
          outline: none;
          margin-bottom: 20px;
          min-width: 20%;
        }
      }
      label{
        min-width: 20%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        span{
          color:white;
          white-space: nowrap;
          padding: 5px 10px;
          background-color: black;
          height: 50px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        input{
          width: 100%;
          margin-bottom: 0;
        }
      }
      .btn-def{
        button{
          display: flex;
          align-items:center;
          justify-content: center;
          height: 50px;
          padding: 5px 20px;
          border:1px solid black;
          background-color: white;
          transition:all 0.3s ease;
          &:hover{
            background-color: black;
            color:white;
          }
        }
      }
    }
  }
</style>