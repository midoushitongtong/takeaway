import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 初始化 css 样式
import 'normalize.css';
// 图标库
import 'material-icons';
// 组件库
import { Button, Badge, Popup } from 'mint-ui';
Vue.component(Badge.name, Badge);
Vue.component(Button.name, Button);
Vue.component(Popup.name, Popup);

// 实例化VM
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
