<template>

  <div class="wrapper" >
        <h3 style="{color: 'red'}">Price</h3>
        <vue-slider
            v-model="value"
            :min="0"
            :max="100"
            :min-range="0"
            :max-range="100"
            :height="10"
            :process-dragable="true"
            :process-style="processStyle"
            tooltip="active"
            tooltip-dir="top"
        >
        </vue-slider>
        <div class="flex">

            <div class="price-input left">
                <input 
                    type="number"
                    :value="from"
                >
                <div class="btns">
                    <span @click="plusFrom"> + </span>
                    <span @click="minusFrom"> - </span>
                </div>
            </div>

            <div class="price-input right">
                <input 
                    type="number"
                    :value="to"
                >
                <div class="btns">
                    <span @click="plusTo"> + </span>
                    <span @click="minusTo"> - </span>
                </div>
            </div>
        </div>
  </div>

</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  components: {
    VueSlider
  },
    data () {
        return {
        // value: [0, 5000],
        from: 0,
        to: 100,
        processStyle: {
            backgroundColor: '#73e019bd',
        },
        }
    },
    methods: {
        plusTo(){
            if(this.to === 100){
                return
            }
            this.to = this.to + 1
        },
        minusTo(){
            if(this.to === 0){
                return
            }
            this.to = this.to - 1
        }, 
        plusFrom(){
            if(this.from === 100){
                return
            }
            this.from = this.from + 1
        },
        minusFrom(){
            if(this.from === 0){
                return
            }
            this.from = this.from - 1
        }
    },
    computed: {
        value: {
            get() {
                return [this.from, this.to];
            },
            set(val) {
                this.from = val[0];
                this.to = val[1];
            },
        },
    },
    watch: {
        disabled(val) {
        if (val) {
            this.from = null;
            this.to = null;
        }
        },
    },
}
</script>

<style scoped lang="scss" >
    $green-color:#73e019bd;
    .wrapper{
        width: 100%;
        margin-bottom: 30px;
        h3{
            margin-bottom: 20px;
            text-transform:uppercase;
        }
    }
    .flex{
        display: flex;
        margin: 0 -10px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .price-input{
        display: flex;
        border: 1px solid #ccc;
        margin: 0 10px;
        width: 50%;
        input{
            border: none;
            outline: none;
            padding: 5px;
            width: 100%;
        }
    }
    .row{
        display: flex;
        width: 100%;
    }

    .btns{
        width: 20px;
        height: 50%;
        span{
            width: 100%;
            display: inline-block;
            border-left: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            cursor: pointer;
            text-align: center;
        }
    }
</style>