import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VTooltip from 'v-tooltip'
import '@mdi/font/css/materialdesignicons.css'
import ArrowComponent from "@/components/ArrowComponent";

Vue.use(VTooltip)

Vue.config.productionTip = false

new Vue({
  store,
  ArrowComponent: ArrowComponent,
  render: h => h(App),
}).$mount('#app')
