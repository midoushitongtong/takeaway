import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home/Home';
import Search from '../pages/search/Search';
import Order from '../pages/order/Order';
import Profile from '../pages/profile/Profile';
import SignIn from '../pages/account/SignIn';
import Merchant from '../pages/merchant/Merchant';
import MerchantFoodList from '../pages/merchant/MerchantFoodList';
import MerchantRatingList from '../pages/merchant/MerchantRatingList';
import MerchantInfo from '../pages/merchant/MerchantInfo';

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
    },
    {
      path: '/merchant',
      component: Merchant,
      children: [
        {
          path: '/',
          redirect: '/merchant/foods'
        },
        {
          path: '/merchant/foods',
          component: MerchantFoodList
        },
        {
          path: '/merchant/ratings',
          component: MerchantRatingList
        },
        {
          path: '/merchant/info',
          component: MerchantInfo
        }
      ]
    }
  ]
});
