import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugins 
import i18n from './i18n/i18n'
import VueFormGenerator from 'vue-form-generator/dist/vfg-core.js'
import Loader from '@/components/Loader'

// css styles 
import '../node_modules/vue-form-generator/dist/vfg-core.css'

import './utils/axios'

Vue.config.productionTip = false

Vue.use(VueFormGenerator)
Vue.component('Loader', Loader)


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
