<template>
  <section class="wrapper">
      <p class="title__form">
        Sing Up for the <span>newsletter</span>
      </p>
      <form class="form">
          <div class="input-mama">
            <input class="input__email" placeholder="Enter Your Email" type="email">
          </div>
          <button class="btn"><p><i class="fa fa-envelope"></i> Subscribe</p></button>
      </form>
      <div class="socials">
          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper{
    border-top: 1px solid #ccc;
    margin: 50px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title__form{
        margin-bottom: 30px;
        margin-top: 30px;
        color: #1A1A1A;
        font-size: 32px;
        font-weight: 200;
        span{
            font-weight: 900;
            text-transform: uppercase;
        }
    }
    .form{
        display: flex;
        justify-content: center;
         width: 500px;
         
        .input-mama{
            border-radius: 20px 0 0 20px;
            position: relative;
            &:before{
                content:"";
                position: absolute;
                top:0px;
                right: 0;
                height: 100%;
                width: 95.5%;
                z-index: -1;
                background:linear-gradient(to right, #72E019,#1A1A1A);
                border-radius: 25px 0 0 25px ;
                outline: none;
            }
        }
        .input__email{
            transform:scale(0.9);
            padding-left: 15px;
            border-radius: 20px 0 0 20px ;
            display: block;
            min-width: 360px;
            height: 40px;
            border: none;
            position: relative;

            &:focus{
                outline: none;
                // outline-width: 3px ;
                // outline-color: #1A1A1A;
            
                border-radius: 20px 0 0 20px ;
            }
            
        }
        .btn{
              border: none;

              display: block;
            position: relative;
            width: 160px;
            background: #1A1A1A;
            border-radius: 0 20px 20px 0;
            cursor: pointer;
            p{
               color: #72E019; 
               font-weight: bold;
               i{
                   color: #72E019;
                   margin-right: 10px;
               }
               
            }
            

        }
    }
    .socials{
        margin-top: 50px;
        display: flex;
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            margin: 0 10px;
            transition: all 0.3s linear;
            border: 1px solid #E4E7ED;
            i{
                transition: all 0.3s linear;
                font-size: 25px;
                color: #1A1A1A;
            }
            &:hover{
                background: #1A1A1A;
                i{
                    color: #72E019 ;
                }
            }
        }

    }
}

</style>