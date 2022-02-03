<template>
  <select v-model="$i18n.locale" @change='langChanger'>
    <option  v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" >
      {{lang}}
    </option>
      <img src="https://openclipart.org/download/268175/1481383216.svg" alt="">
  </select>
</template>

<script>
import i18n from '../i18n/i18n'
export default {
  data() {
    return { 
      langs: ['ru', 'en'],
    }
  },
  methods:{
    langChanger(){
      this.$store.dispatch('lang/changeLang', { langChanged: i18n.locale });
    }
  }
}
</script>

<style>

</style>