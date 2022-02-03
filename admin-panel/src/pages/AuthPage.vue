<template>
  <div class="wrapper">
    <div class="form" v-if="isLogin">
      <div class="form_block">
        <h3>Login</h3>
        <p class="error" v-if="error">{{error}}</p>
        <form id="" action="#" class="feed-form" @submit.prevent="loginUser">
          <div class="form_inputs">
            <i class="fa fa-user" aria-hidden="true"></i>
            <input 
              name="name" 
              required 
              placeholder="Username" 
              type="text" 
              v-model="username"
            />
          </div>
          <div class="form_inputs">
            <i class="fa fa-lock" aria-hidden="true"></i>
            <input
              name="password"
              placeholder="password"
              type="password"
              required
              v-model="password"
            />
          </div>
            <div class="form__block">
            <button class="form__block_btn">Login</button>
              <a href="#" class="form__block_link">
                <p class="form_block_text">Forgot password?</p>
              </a>
            <a href="#" class="form__block_link" @click="isLogin = !isLogin">Sing Up</a>
            </div>
        </form>
      </div>
    </div>

    <div class="form" v-else>
       <div class="form_block">
        <h3>Registration</h3>
        <form id="" action="#" class="feed-form register-form" @submit.prevent="registerUser">
          <div class="all_inputs">
            <div class="form_inputs">
              <i class="fa fa-user" aria-hidden="true"></i>
              <input name="username" required placeholder="Username" type="text"  v-model="username"/>
            </div>
            <div class="form_inputs">
              <i class="fa fa-user" aria-hidden="true"></i>
              <input name="first_name" required placeholder="First name" type="text"  v-model="first_name"/>
            </div>
            <div class="form_inputs">
              <i class="fa fa-user" aria-hidden="true"></i>
              <input name="last_name" required placeholder="Last name" type="text"  v-model="last_name"/>
            </div>
            <div class="form_inputs">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <input name="email" required placeholder="Email" type="email"  v-model="email"/>
            </div>
            <div class="form_inputs">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input
                name="password"
                required
                placeholder="password"
                type="password" v-model="password"
              />
            </div>
            <div class="form_inputs">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input
                name="password_confirmation"
                required
                placeholder="confirm password"
                type="password"
                v-model="password_confirmation"
              />
            </div>
          </div>
          <div class="form__block">
            <button class="form__block_btn">Sign Up</button>
            <a href="#" class="form__block_link">
              <p class="form_block_text" @click="isLogin = !isLogin">Login</p>
            </a>
          </div>
        </form>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data(){
      return{
        isLogin: true,
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password_confirmation: "",
        error: ""
      }
  },
  methods: {

    async registerUser(){
      const user = {
        username: this.username,
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        password: this.password,
        password_confirmation: this.password_confirmation
      }
      try{
         const resp = await this.$axios.post('api/register', user);
        if(resp.data.access_token){
          this.$store.dispatch('auth/login', { isAuthenticated: true, token: resp.data.access_token });
          this.$router.push({name: "admin"})
        }
      }catch(e){
        console.log(e);
      }
    },

    async loginUser(){
      try{
        const user = {
          username: this.username,
          password: this.password,
        }
        const resp = await this.$axios.post('api/login', user);
        if(resp.data.access_token){
          this.$store.dispatch('auth/login', { isAuthenticated: true, token: resp.data.access_token });
          this.$router.push({name: "admin"})
        }
      }catch(err){
        this.error= err.response.data.message
        console.log(err);
      }
    }
  }
};
</script>

<style scoped lang="scss">
a{
  margin: 0;
  padding: 0;
}
.error{
  padding: 5px 0 ;
  color: red;
}
.wrapper{
    width: 100%;
    min-height: 100vh;
    background-color: rgb(235, 235, 235);
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  h3{
    color: red;
    padding: 10px 0;
  }
  form {
    
    .form_inputs {
      position: relative;
      margin-bottom: 10px;
      input {
        background-color: transparent;
        height: 45px;
        width: 300px;
        border: 2px solid red;
        border-radius: 4px;
        color: red;
        outline: none;
        font-size: 14px;
        display: flex;
        align-items:center;
        padding-left: 25px;
        @media(max-width:400px){
          width: 100%;
        }
      }
      i {
        position: absolute;
        left: 8px;
        top: 13px;
        &::before {
          color: red;
        }
      }
    }
  }
  .form__block {
    margin-top: 10px;

    &_btn {
      margin-bottom: 20px;
      width: 300px;
      height: 45px;
      background: transparent;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      font-weight: 600;
      font-size: 16px;
      text-transform: uppercase;
      color: #ff1141;
      transition: all 0.3s;
      outline: none;
      border:1px solid black;
      @media(max-width:400px){
        width: 100%;
      }
      &:hover {
        background-color: #c02147;
        border: 1px solid #ffffff;
        cursor: pointer;
        color: #ffffff;
        transform: scale(1.1);
      }
    }
    &_link {
      font-weight: 500;
      font-size: 16px;
      color: red;
      text-decoration: none;
      transition: all 0.3s ease;
      &:hover {
        color:rgba(255, 0, 0, 0.603);
      }
    }
  }
}
// register 
.form_block{
  width: 800px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media(max-width:991px){
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
  }
}
.register-form{
  flex-wrap: wrap;
  .all_inputs{
    margin-left: -10px;
    margin-right: -10px;
    display: flex;
    flex-wrap:wrap;
    i{
      left: 16px !important;
    }
    input{
      margin-right: 0;
      width:100% !important;
    }
  }
  .form_inputs{
    width:50%;
    padding-left: 10px;
    padding-right: 10px;
    @media(max-width:750px){
      width: 100%;
    }
  }
}
@media (max-width: 576px) {
  .login {
    &_block {
      margin: 0 auto;
      width: 280px;
      min-height: 238px;
    }
    form {
      .form_inputs {
        i {
          left: 35px;
          top: 15px;
        }
        input {
          width: 250px;
        }
      }
    }
    .form__block {
      &_btn {
        width: 250px;
      }
      &_link {
        text-align: center;
      }
      &_text {
        padding-left: 10px;
      }
    }
  }
}

@media (max-width: 320px) {
  .login {
    padding-left: 1px;
	&_block {
		width: 190px;
	}
    form {
      .form_inputs {
        i {
          left: 15px;
          top: 15px;
        }
        input {
          width: 180px;
          font-size: 11px;
        }
      }
    }
    .form__block {
      &_btn {
        width: 180px;
        font-size: 11px;
      }
    }
  }
}
</style>


