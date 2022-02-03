<template>
  <div class="promotion__wrapper" v-if="dist">
        <div class="countdown">
            <div class=" countdown__item day">
                <p>{{day}}</p>
                <span>days</span>
            </div>
            <div class=" countdown__item hour">
                <p>{{hour}}</p>
                <span>hours</span>
            </div>
            <div class=" countdown__item minutes">
                <p>{{minute}}</p>
                <span>mins</span>
            </div>
            <div class=" countdown__item seconds">
                <p>{{second}}</p>
                <span>secs</span>
            </div>
        </div>
        <div class="promotion__description">
            <h2>hot deal this week</h2>
            <p>new collection up to 50% off</p>
        </div>
        <div class="promition__href-btn">
            <a href="#">shop now</a>
        </div>

  </div>
</template>

<script>

export default {
    data(){
        return{
            countDownDate: new Date("Dec 25, 2022 00:00:00").getTime(),
            nowDate: '',
            dist: null,
            day: null,
            hour: null,
            minute: null,
            second: null,
        }
        
    },
    methods: {
        countDownFunction (){
           const $this = this
        setInterval(function () {
            this.nowDate = new Date().getTime()
            
            let distance = $this.countDownDate - this.nowDate
            let days = Math.floor(distance / (1000 * 60 * 60 * 24))
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            let seconds = Math.floor((distance % (1000 * 60)) / 1000)
            if(days < 10){
               days = '0' + days
            }
            if(hours < 10){
               hours = '0' + hours
            }
            if(minutes < 10){
               minutes = '0' + minutes
            }
            if(seconds < 10){
               seconds = '0' + seconds
            }
            $this.dist = distance
            $this.day = days
            $this.hour = hours
            $this.minute = minutes
            $this.second = seconds
            
        },1000)
        }
    },
    created(){
        this.countDownFunction()
    }

}
</script>

<style lang="scss" scoped>
.promotion__wrapper{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
    width: 100vw !important;
    background-image: url(../../assets/promotionBg.png);
    background-size: cover;
    background-position: center;
    .countdown{
        display: flex;
        justify-content: center;
        margin-top: 30px;
        .countdown__item{
            margin: 15px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 100px;
            height: 100px;
            background: #1A1A1A;
            border-radius: 50%;
            text-align: center;
            p{
                color: #72E019;
                font-size: 24px;
                font-weight: bold;
                margin: 0;
                line-height: 20px;
            }
            span{
                color: #72E019;
                text-transform: uppercase;
                line-height: 16px;
                font-weight: 200;
            }
        }
    }
    .promotion__description{
        display: flex;
        justify-content: center; 
        flex-direction: column;
        align-items: center;
        text-transform: uppercase;
        text-align: center;
        h2{
            font-weight: bold;
            font-size: 30px;
            color: #1A1A1A;
        }
        p{
            font-size: 24px;
            color: #1A1A1A;

        }
    }
    .promition__href-btn{
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        a{
            cursor: pointer;
            border: none;
            color: #72E019;
            background-color: #1A1A1A;
            padding: 12px 30px;
            text-transform: uppercase;
            font-weight: 700;
            display: inline-block;
            text-align: center;
            border-radius: 40px;
            transition: all 0.3s linear;
            &:hover{
                color: #fff;

            }
        }
    }
}
</style>