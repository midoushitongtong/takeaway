import Vue from 'vue';
import VueRouter from 'vue-router';

import SignIn from '../pages/account/SignIn';
import Merchant from '../pages/merchant/Merchant';
import MerchantFoodList from '../pages/merchant/MerchantFoodList';
import MerchantRatingList from '../pages/merchant/MerchantRatingList';
import MerchantInfo from '../pages/merchant/MerchantInfo';

const Home = () => import('../pages/home/Home');
const Search = () => import('../pages/search/Search');
const Order = () => import('../pages/order/Order');
const Profile = () => import('../pages/profile/Profile');

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
          component: MerchantFoodList,
          meta: {
            index: 0
          }
        },
        {
          path: '/merchant/ratings',
          component: MerchantRatingList,
          meta: {
            index: 1
          }
        },
        {
          path: '/merchant/info',
          component: MerchantInfo,
          meta: {
            index: 2
          }
        }
      ]
    }
  ]
});
