<template>
  <div class="side__bar-wrapper">
    <div class="side__bar">
      <p class="logo"><span class="side__bar-visible">CT</span>Market</p>
      <hr class="logo__hr" />
      <div class="user__block">
        <a href="#" class="user" 
        @click.prevent="visible = !visible"
        
        >
          <div class="user-wrapper">
            <p class="user__img side__bar-visible">img</p>
            <p class="user__name">{{$t('message.username')}}</p>
          </div>
          <i class="fa fa-caret-down" aria-hidden="true"
         
          :class="{rotate: (visible)}"
          ></i>
        </a>
        <transition name="slide">
          <div class="user__config" v-if="visible">
                <a href=""><span class="side__bar-visible">{{$t('sidebar.insideProfile.shortcutMP')}}</span>{{$t('sidebar.insideProfile.myprofile')}}</a>
                <a href=""><span class="side__bar-visible">{{$t('sidebar.insideProfile.shortcutE')}}</span>{{$t('sidebar.insideProfile.edit')}}</a>
                <a href=""><span class="side__bar-visible">{{$t('sidebar.insideProfile.shortcutS')}}</span>{{$t('sidebar.insideProfile.settings')}}</a>
            </div>
        </transition>
            
      </div>
      <hr class="log__hr" />
    </div>
    <nav>
        <ul class="navigation">
            <li @click="usersVisible = !usersVisible" >
              <span class="side__bar-visible">
                <i class="fa fa-users" aria-hidden="true"></i>
              </span>
              {{$t('sidebar.users')}}
            </li>
            
            <transition name="slide">
              <div class="config" v-if="usersVisible">
                <router-link :to="{name: 'admin.users'}">
                  <span class="side__bar-visible">
                    {{$t('user.view_sb_ms')}}
                  </span>
                  {{$t('user.view_sb_xs')}}
                </router-link>
                <router-link :to="{name: 'admin.users.create-role'}">
                  <span class="side__bar-visible">
                    {{$t('user.create_sb_ms')}}
                  </span>
                    {{$t('user.create_sb_xs')}}
                </router-link>
              </div>
          </transition>

            <router-link tag='li' :to="{name: 'admin.categories'}"><span class="side__bar-visible"><i class="fa fa-th" aria-hidden="true"></i></span>{{$t('sidebar.categories')}}</router-link>
            <li @click="productVisible = !productVisible"><span class="side__bar-visible"><i class="fa fa-square" aria-hidden="true"></i></span>{{$t('sidebar.products')}}</li>
              <transition name="slide">
          <div class="config" v-if="productVisible">
              <router-link :to="{name: 'admin.products.create'}"><span class="side__bar-visible">{{$t('sidebar.insideProducts.shortcutCreate')}}</span>{{$t('sidebar.insideProducts.create')}}</router-link>
              <router-link :to="{name: 'admin.products.test'}"><span class="side__bar-visible">{{$t('sidebar.insideProducts.shortcutView')}}</span>{{$t('sidebar.insideProducts.view')}}</router-link>
            </div>
        </transition>
            <li @click="brandVisible = !brandVisible"><span class="side__bar-visible"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>{{$t('sidebar.brands')}}</li>
            <transition name="slide">
          <div class="config" v-if="brandVisible">
              <router-link :to="{name: 'admin.brands'}"><span class="side__bar-visible">{{$t('sidebar.insideBrands.shortcutView')}}</span>{{$t('sidebar.insideBrands.view')}}</router-link>
              <router-link :to="{name: 'admin.brands.create'}"><span class="side__bar-visible">{{$t('sidebar.insideBrands.shortcutCreate')}}</span>{{$t('sidebar.insideBrands.create')}}</router-link>
            </div>
            </transition>
            <li><span class="side__bar-visible"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>{{$t('sidebar.cart')}}</li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
      return {
        visible:false,
        productVisible: false,
        brandVisible: false,
        usersVisible: false
      }
  }
};
</script>

<style lang="scss" scoped>
$green-color:#72E019;
$green-shadow: #64c515;  


.side__bar-visible{
    display: block;
    width: 50px;
    text-align: center;
    margin-right: 10px;
}
.side__bar-wrapper {
  position: absolute;
  overflow-y: scroll;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  background: #000;
}
.side__bar {
  padding: 8px 15px;
  color: #fff;
  .logo {
      display: flex;
    padding-top: 26px;
    padding-bottom: 25px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;

  }
}
.log__hr{
  margin-top: 30px;
  color: #e3e3e3;
  height: 0.5px;
}
.logo__hr {
  margin-top: 4px;
  color: #e3e3e3;
  height: 0.5px;
}
.user__block {
  .user {
    padding-top: 30px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    .user-wrapper{
        display: flex;
        align-items: center;
        .user__img {
      display: flex;
      justify-content: center;
      align-items: center;
      background: $green-shadow;
      height: 50px;
      margin-bottom: 0;

      border-radius: 50%;
      margin-right: 10px;
    }
    .user__name {
      font-size: 14px;
    }
    }
    
    i {
      transition: all 0.6s ease;
      font-size: 16px;
      color: white;
    }
  }
  .user__config{
      a{
          padding: 15px 0;
          display: flex;
          text-decoration: none;
          color: #fff;
      }
  }
}
nav{
    .navigation{
        padding: 8px 15px;
        li{
            cursor: pointer;
            display: flex;
            color: #fff;
            list-style: none;
            font-weight: bold;
            font-size: 16px;
            padding: 15px 0;
            transition: all 0.3s ease;
            i{
                color: #fff;
            }
            &:hover{
              background:$green-shadow;
              border-radius: 10px;
            }
            
        }
    }
}
.config{
  a{
    
    padding: 15px auto;
    margin: 15px auto;
    color: white;
  font-weight: 400;
  text-decoration: none;
  display: flex;
  border-radius: 15px;
  transition: all 0.3s linear;
  &:hover{
    background: teal;
  }
  }
  

}

/////////////////////////// animate ////////////////// 

.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
.rotate{
 transform: rotate(540deg);
}
</style>

