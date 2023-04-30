import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router'
import Message from '@/components/Message'
Vue.use(ElementUI);

Vue.component(Message.name,Message)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
