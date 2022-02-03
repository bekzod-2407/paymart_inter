<template>
  <div class="add">
    <form action="#" @submit.prevent="createUser">
      <h2>{{$t('user.add_title')}}</h2>
      <div class="input_wrapper">
        <vue-form-generator
          :schema="schema"
          :model="model"
          :options="formOptions"
        >
        </vue-form-generator>
      </div>
    </form>
  </div>
</template>

<script>
import i18n from '../../../i18n/i18n'

export default {
  name: "create",

  data() {
    return {
      model: {
        username: "",
        first_name: "",
        last_name: "",
        avatar: [],
        email: "",
      },
      schema: {
       
      },
      formOptions: {
        validateAfterChanged: true,
      },
    };
  },
  methods: {
    async createUser() {
      try {
        const resp = await this.$axios.post(
          `/api/dashboard/users`,
          this.model
        );
        this.value, this.value_surname, this.value_age, this.value_address;
        this.$router.push({ name: "admin.users" });
        console.log(resp.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  created(){
    const $this = this;
    this.schema.fields = [
      {
        type: "input",
        inputType: "text",
        placeholder: "enter your username",
        model: "username",
        required: true,
        validator: "string",
        styleClasses: "inps",
      },
      {
        type: "input",
        inputType: "text",
        placeholder: "enter your first name",
        model: "first_name",
        required: true,
        validator: "string",
        styleClasses: "inps",
      },
      {
        type: "input",
        inputType: "text",
        placeholder: "enter your last name",
        model: "last_name",
        required: false,
        validator: "string",
        styleClasses: "inps",
      },
      {
        type: "input",
        inputType: "password",
        placeholder: "enter your password",
        model: "password",
        required: true,
        validator: "string",
        styleClasses: "inps",
      },
      {
        type: "input",
        inputType: "password",
        placeholder: "confirm you passwrod",
        model: "password_confirmation",
        required: true,
        validator: "string",
        styleClasses: "inps",
      },
      {
        type: "input",
        inputType: "file",
        placeholder: "file",
        model: "avatar",
        required: false,
        styleClasses: "inps",
      },
      {
        type: "input",
        inputType: "text",
        placeholder: "enter your email",
        model: "email",
        required: true,
        styleClasses: "inps",
      },
      {
        type: "submit",
        buttonText: i18n.t('msg.btn'),
          async onSubmit(model){
              const formData = new FormData()
              
              formData.append('username', model.username)
              formData.append('avatar', model.avatar)
              formData.append('first_name', model.first_name)
              formData.append('last_name', model.last_name)
              formData.append('email', model.email)
              formData.append('password', model.password)
              formData.append('password_confirmation', model.password_confirmation)
              
              await $this.$axios.post(`/api/dashboard/users`, formData);
              await $this.$router.push({ name: "admin.users" });
          },
        label: '',
        validateBeforeSubmit: true
      },
    ];
  }
};
</script>

<style lang="scss"  scoped>
.add{
  width: 500px;
  margin: 0 auto;
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
select {

  margin-bottom: 20px;
}
div.add {
  padding-top: 20px;
}
fieldset {
  padding: 20px;
  border: none;

  input {
    padding: 10px !important;
    border: 1px solid rgb(122, 123, 184) !important;
    border-radius: 10px !important;
  }
}
h2 {
 
  text-align: center;
  // color: #;
}
.input_wrapper {
  height: 100%;
  padding: 0 20px;
}

button {
  display: flex;
  font-size: 18px;
  transition: all 300ms linear;
  justify-self: center;
  padding: 10px;
  border: 1px solid rgb(122, 123, 184);
  border-radius: 10px;
  background-color: transparent;
  color: rgb(122, 123, 184);
  cursor: pointer;
  margin: 10px auto;
  color: rgb(122, 123, 184) r;
  &:hover {
    background-color: rgb(122, 123, 184);
    color: #fff;
  }
}
</style>