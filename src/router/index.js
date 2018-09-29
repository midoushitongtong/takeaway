import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home/Home';
import Search from '../pages/search/Search';
import Order from '../pages/order/Order';
import Profile from '../pages/profile/Profile';

// 注入 vue-router 插件
Vue.use(VueRouter);

// 导出路由模块
export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
});
