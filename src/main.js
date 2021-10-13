import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import less from 'less'
import { Swipe, SwipeItem } from 'vant';
import toast from 'components/common/toast/index'
import FastClick from 'fastclick' //移动端300ms延迟
import VueLazyLoad from "vue-lazyload"; //Vue实现图片懒加载

Vue.config.productionTip = false
//添加事件总线对象
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
Vue.use(VueLazyLoad, {
  //图片加载时显示的图片
  loading: require('./assets/img/common/onload.jpg')
})
Vue.use(ElementUI);
Vue.use(less);
Vue.use(Swipe);
Vue.use(SwipeItem);

//解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
