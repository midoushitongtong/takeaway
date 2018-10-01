import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 初始化 css 样式
import 'normalize.css';
// 图标库
import 'material-icons';
// 组件库
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);

// 实例化VM
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
