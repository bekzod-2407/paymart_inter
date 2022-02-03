<template>
  <div class="navigation__wrapper">
      <div class="container">
        <div class="row">
            <div class="nav__wrapper about">
                <h2>about</h2>
                <ul>
                    <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i>Uzbekistan Tashkent</a></li>
                    <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i>+99897-777-07-77</a></li>
                    <li><a href="#"><i class="fa fa-envelope-o" aria-hidden="true"></i>zteam@gmail.com</a></li> 
                </ul>
            </div>
            <div class="nav__wrapper categories">
                <h2>categories</h2>
                <ul>
                    <li><a href="">hot ideals</a></li>
                    <li><a href="">laptop</a></li>
                    <li><a href="">smartphones</a></li>
                    <li><a href="">cameras</a></li>
                    <li><a href="">Accessories</a></li>
                </ul>
            </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navigation__wrapper{
    border-top: 3px solid #72E019;
    padding-top: 45px;
    width: 100%;
    display: flex;
    background-color: #1A1A1A;
    li{
        list-style: none;
        i{
            color: #72E019;
            margin-left: 5px;
        }
        
    }
    p{
        color: #B9BABC;
        margin-bottom: 15px;
    }
    a{
        display: inline-block;
        color: #B9BABC;
        text-transform: uppercase;
        margin-bottom: 15px;
        font-size: 16px;
        transition: all 0.3s linear;
        &:hover{
            color: #72E019;
        }
    }
    h2{
        text-transform: uppercase;
        font-weight: 900;
        color: #fff;
        margin-bottom: 30px;
        text-align: center;
    }
    .nav__wrapper{
        margin: 0 30px 20px 0 ;
        width: 25%;
    }
        .about{
            width: 100%;
            ul{
                display: flex;
                justify-content: space-between;
                align-items: center;
                li{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            };
           i{
               padding-right: 10px;
           }
           .fa-map-marker{
               padding-right: 16px;
           }
        }
        .categories{
            width: 100%;
            ul{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
    .row{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>