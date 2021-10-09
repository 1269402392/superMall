import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import less from 'less'
import { Swipe, SwipeItem } from 'vant';

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

Vue.use(ElementUI);
Vue.use(less);
Vue.use(Swipe);
Vue.use(SwipeItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
