<template>
  <div class="wrapper__nav">
      <div class="container">
          <div class="burger__nav">

          <button class="burger__btn" 
            ref="open"
            @click="open()">
            <i class="fa fa-bars" aria-hidden="true"></i></button>
            <ul class="nav" 
            ref="nav">
                <button class="burger__close " 
                    ref="close"
                    @click="close()"
                    >back</button>
                <router-link tag="li" class="nav-link" :to="{name: 'home'}">home</router-link>
                <router-link tag="li" class="nav-link" :to="{name: 'checkout'}">Checkout</router-link>
                <router-link tag="li" class="nav-link" :to="{name: 'store'}">Store</router-link>
                <router-link tag="li" class="nav-link" :to="{name: 'home.product.view'}">Product by id</router-link>
                <router-link tag="li" class="nav-link" :to="{name: 'home.order.page'}">UserOrder</router-link>
                <li>smartphones</li>
                <li>cameras</li>
                <li>accessories</li>
            </ul>
          </div>

      </div>
  </div>
</template>

<script>
export default {
    props: ['isToggleNav'] ,
    methods:{
        open(){
            this.$refs.nav.classList.remove('close')
            this.$refs.nav.classList.add('open')
            this.$refs.nav.style.pointerEvents = 'auto'

        },
        close(){
            this.$refs.nav.classList.remove('open')
            this.$refs.nav.classList.add('close')
            this.$refs.nav.style.pointerEvents = 'none'
        }
    }

}
</script>

<style lang="scss" scoped>
.nav-link{
    &.router-link-exact-active{
        color:#72E019 ;
    }
}
.open{
    opacity: 1 !important;
    

}
.close{
    opacity: 0 !important;
}

.wrapper__nav{
    width: 100%;
    border-bottom: 1px solid #E4E7ED;
    .burger__btn{
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        color: #1A1A1A;
        font-size: 30px;
    }
}
    .nav{
        padding: 30px 0;
        position: relative;
        display: flex;
        .burger__close{
            position: absolute;
            border: none;
            background: none;
            font-weight: bold;
            color: #fff;
            font-size: 20px;
            z-index: 450;
            text-transform: uppercase;
            cursor: pointer;
            top: 30px;
            right: 20px;
            padding: 10px;
        }
        .home{
            margin-left: 0;
        }
        li{
            position: relative;
            list-style: none;
            margin: 0 15px;
            text-transform: capitalize;
            font-size: 18px;
            font-weight: 500;
            transition: all 0.3s linear;
            color: #1A1A1A;
            cursor: pointer;
            &.router-link-exact-acitve{
                color: #72E019;
            }
            &::before{
                content: '';
                width: 0;
                transition: all 0.3s ease;
            }

            &:hover {
                color: #72E019;
                 &::before{ 
                content: '';
                position: absolute;
                bottom: -10px;
                width: 100%;
                background: #72E019;
                height: 2px;
            }

                

            }
        }
    }
    @media(max-width: 991px){
        .wrapper__nav{
            li{
                font-size: 14px;
            }
        }

    }
    @media(max-width: 720px){

        .burger__nav{
            position: relative;
            margin: 30px 0;
            min-width: 100%;
            display: flex;
            justify-content: start;
            .burger__btn{
            display: flex;
            }
            ul{
                display:  flex;
                opacity: 0;
                margin: 0;
                transition: opacity 0.3s ease;
                pointer-events: none;
                padding-top: 80px;
                padding-bottom: 50px;
                background: #1A1A1A;
                position: absolute;
                left: -15px;
                top: -30px;
                z-index: 500;
                flex-direction: column;
                &::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    z-index: 400;
                    pointer-events: none;
                    height: 100vw;
                    background: rgba(26, 26, 26, 0.384);
                }
                li{
                    width: 400px;
                    display: flex;
                    z-index: 450;
                    font-size: 20px;
                    padding: 30px 15px;
                    color: #72E019;
                    border-bottom: 1px solid #E4E7ED;
                    &:hover{
                        color: #fff;
                    }
                }
                .home{
                        margin-left: 15px;
                }
                
            }
        }

    }
</style>