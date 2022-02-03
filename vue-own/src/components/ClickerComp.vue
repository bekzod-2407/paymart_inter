<template>
  <div class="test-wrapper">
    <button @click="count++" id="plus">Счётчик кликов плюс</button>
    <div class="count">
      {{count}}
    </div>
    <button @click="counter" id="minus">Счётчик кликов минус</button>
  </div>
</template>

<script>
export default{
  data: function () {
    return { 
      count: 0
    }
  },
  methods:{
    counter(){
      this.count--;
      if (this.count < 0) {
        this.count = 0;
      }
    }
  }
}

</script>
