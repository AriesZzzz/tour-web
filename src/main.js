import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/reset.scss'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.directive('title', (el, binding) => {
  // 每个页面都有自己的标题
  document.title = binding.value
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
