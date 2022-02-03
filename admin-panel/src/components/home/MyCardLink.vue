<template>
  <div class="card__wrapper">
      <div class="card">
       <img :src="this.srcImage" alt="">
       <div class="card__content">
           <p class="name">
                Laptop
           </p>
           <p class="collection">Collection</p>
           <a class="to__link" href="#">shop now <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
       </div>
       
          
      </div>

  </div>
</template>

<script>

export default {
props:['srcImage'],
data(){
    return{
       url: this.srcImage
    }
},
computed:{
backgroundStyle: function(){
    console.log(this.srcImage);
    return {
        
        'backgroundImage': `url("${this.srcImage}")`
    }
}
}

}
</script>

<style lang="scss" scoped>
    .card__wrapper{
        padding-left: 15px;
        padding-right: 15px;    
        width: 33.3%;
        height: 250px;
        overflow: hidden;
        transition: all 0.3s ease;
        .card{
            transition: all 0.3s ease;
            width: 100%;
            height: 100%;
            background-position:  center;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            overflow: hidden;
            img{
                transition: all 0.3s ease;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            &::before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 200;
                background: rgba(115, 224, 25, 0.7);
                clip-path: polygon(90% 0, 30% 100%, 0 100%, 0 0);
                
            }
            .card__content{
                position: absolute;
                top: 30px;
                left: 20px;
                z-index: 1000;
                p{
                    color: #fff;
                    padding: 0;
                    margin: 0;
                }
                .name{
                        font-weight: bold;
                        font-size: 22px;

                }
                .collection{
                    font-weight: bold;
                    font-size: 22px;
                    line-height: 20px;
                    margin-bottom: 20px;
                }
                .to__link{
                    text-transform: uppercase;
                    color: #fff;
                    cursor: pointer;
                    i{
                        color: #fff;
                        font-size: 16px;
                    }
                    &:hover{
                        border-bottom: 1px solid #fff;
                    }
                }
            }
        }
            &:hover .card {
                img{
                transform:  scale(1.1);
                z-index: -200;
                }
            }
    }

</style>
