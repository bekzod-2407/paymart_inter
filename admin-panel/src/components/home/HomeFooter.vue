<template>
  <div class="footer__wrapper">
      <div class="cards">
          <a href=""><i class="fa fa-cc-visa" aria-hidden="true"></i></a>
          <a href=""><i class="fa fa-credit-card" aria-hidden="true"></i></a>
          <a href=""><i class="fa fa-cc-paypal" aria-hidden="true"></i></a>
          <a href=""><i class="fa fa-cc-mastercard" aria-hidden="true"></i></a>
          <a href=""><i class="fa fa-cc-discover" aria-hidden="true"></i></a>
          <a href=""><i class="fa fa-cc-amex" aria-hidden="true"></i></a>
      </div>
      <p>Copyright ©2021 All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="">Colorlib</a> </p>
  </div>
</template>

<script>
export default {
 name: 'HomeFooter',
}
</script>

<style lang="scss" scoped>
.footer__wrapper{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 160px;
        background-color: #1A1A1A;
    .cards{
        margin-bottom: 20px;
        a{  
            margin: 0 5px;
            transition: all 0.3s linear;
            i{
                font-size: 36px;
            }
            
        }
    }
    p{
        color: #B9BABC;
        i{
            color: #72E019;
        }
        a{
            color: #000;
            &:hover{
                color: #72E019;
            }
        }
    }
}

</style>