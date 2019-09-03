import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// 引入fastclick
import fastclick from 'fastclick';
fastclick.attach(document.body);//作用于整个页面

// 引入主样式
import './common/stylus/index.styl'
import {} from 'vant';
// 使用组件库的轮播
import { Swipe,SwipeItem} from 'vant'
Vue.use(Swipe).use(SwipeItem);
Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
