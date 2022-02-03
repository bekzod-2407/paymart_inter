<template>
  <div class="header-wrapper">
    <div class="header-content">
      <div class="left-side">
        <div class="sidebar-button">
          <a href="#" @click="onClick" :class="(isActive) ? 'lined' : 'dotted' ">
            <span></span>  
            <span></span>  
            <span></span>  
          </a>
        </div>
        <p>{{$t('message.name')}}</p>
      </div>
      <div class="right-side">
        <div class="search-wrapper">
          <input type="text" :placeholder="$t('message.placeholder')">
          <a href="#" class="search-button">
            <i class="fa fa-search"></i>
          </a>
        </div>
        <div class="blocks-wrapper">
          <a href="#">
            <i class="fa fa-th-large"></i>
          </a>
        </div>
        <div class="notification-wrapper">
          <a href="#">
            <i class="fa fa-bell"></i>
          </a>
        </div>
        <div class="lang-wrapper">
          <lang-change></lang-change>
        </div>
        <div class="profile-wrapper">
          <a href="#" @click.prevent="logout">
            <i class="fa fa-user"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import langChange from '../LangChange.vue'
export default {
  components:{langChange},
  props: ['isActive'],
  methods: {
    onClick(){
      this.$emit("onToggle")
    },
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push({ name: 'auth' })
    }
  }
}
</script>

<style lang='scss' scoped>
  .header-wrapper{
    a{
      text-decoration: none;
      &:hover{
        i{
          color:#8d8d8d;
        }
      }
    }
    .header-content{
      padding-left: 30px;
      padding-right: 30px;
      height:100px;
      background-color:rgb(231, 231, 231);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .left-side{
      display: flex;
      align-items: center;
      p{
        color:#8d8d8d;
        font-weight: 600;
        @media(max-width:380px){
          display: none;
        }
      }
      .sidebar-button{
        margin-right: 30px;
        a{
          min-height: 60px;
          max-height: 60px;
          min-width: 60px;
          max-width: 60px;
          border-radius: 50%;
          background-color: white;
          box-shadow:  0 0 20px -10px rgba(black,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .dotted{
          span{
            height: 4px;
            width: 4px;
            border-radius: 50%;
          }
        }
        span{
          transition: all 0.3s ease;
          height: 4px;
          width: 30px;
          background-color: #8d8d8d;
          display: block;
          margin-bottom: 4px;
          &:last-child{
            margin-bottom: 0;
          }
        }
      }
    }
    .right-side{
      i{
        transition:all 0.3s ease;
        font-size:18px;
      }
      display:flex;
      align-items: center;
      .search-wrapper{
        @media(max-width:760px){
          display: none;
        }
        margin: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        input{
          padding-right: 10px;
          display: block;
          height: 40px;
          border:none;
          outline: none;
          background-color: rgb(231, 231, 231);
          border-bottom: 1px solid #8d8d8d;
        }
        .search-button{
          min-height: 60px;
          max-height: 60px;
          min-width: 60px;
          max-width: 60px;
          border-radius: 50%;
          background-color: white;
          box-shadow:  0 0 20px -10px rgba(black,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          i{
            color:#8d8d8d;
          }
        }
      }
      .blocks-wrapper{
        margin-right:30px;
      }
      .notification-wrapper{
        margin-right: 30px;
      }
      .lang-wrapper{
        margin-right: 30px;
        select{
          background-color: rgb(236, 236, 236);;
          border:none;
          outline: none;
        }
      }
    }
  }
</style>