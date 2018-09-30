import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 初始化 css 样式
import 'normalize.css';
// 图标库
import 'material-icons/iconfont/material-icons.scss';
// 全局公共样式
import './assets/scss/mixins.scss';

// 实例化VM
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
