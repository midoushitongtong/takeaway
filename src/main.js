import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 初始化 css 样式
import 'normalize.css';
// 图标库
import 'material-icons';
// 组件库
import { Button, Badge, Popup, Switch, Lazyload } from 'mint-ui';
// 过滤器
import './filters';
// 懒加载
// import VueLazyLoad from 'vue-lazyload';
// import loading from './assets/img/loading.gif';

Vue.component(Switch.name, Switch);
Vue.component(Badge.name, Badge);
Vue.component(Button.name, Button);
Vue.component(Popup.name, Popup);
Vue.use(Lazyload);

// Vue.use(VueLazyLoad, {
//   loading
// });

// 实例化VM
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
