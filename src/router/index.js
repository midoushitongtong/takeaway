import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home/Home';
import Search from '../pages/search/Search';
import Order from '../pages/order/Order';
import Profile from '../pages/profile/Profile';
import SignIn from '../pages/account/SignIn';

// 注入 vue-router 插件
Vue.use(VueRouter);

// 导出路由模块
export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        showFooterNav: true
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooterNav: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooterNav: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooterNav: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooterNav: true
      }
    },
    {
      path: '/signIn',
      component: SignIn
    }
  ]
});
