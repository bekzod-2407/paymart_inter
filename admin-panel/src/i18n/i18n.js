import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './locales/index'
import store from '../store'

Vue.use(VueI18n)
  
const i18n = new VueI18n({
  locale: store.getters['lang/langChanged'],
  messages // установка сообщений локализаций
})

export default i18n;