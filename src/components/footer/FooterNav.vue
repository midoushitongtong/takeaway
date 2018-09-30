<template>
  <footer class="footer-nav-container">
    <router-link class="footer-nav-item"
                 v-for="(nav, index) in navList"
                 :key="index"
                 :to="nav.path"
                 exact
    >
      <span class="material-icons">{{ nav.icon }}</span>
      <p>{{ nav.name }}</p>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'FooterNav',
  data () {
    return {
      navList: [
        {
          path: '/',
          icon: 'home',
          name: '首页'
        },
        {
          path: '/search',
          icon: 'search',
          name: '搜索'
        },
        {
          path: '/order',
          icon: 'view_list',
          name: '订单'
        },
        {
          path: '/profile',
          icon: 'person',
          name: '我的'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
  .footer-nav-container {
    @include border-top-1px(#e5e5e5);
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 51px;
    background: #fff;
    .footer-nav-item {
      flex: 1;
      padding-top: 5px;
      padding-bottom: 5px;
      text-align: center;
      color: #5d656b;
      p {
        margin: 0;
        font-size: 13px;
      }
    }
    .footer-nav-item:active,
    .footer-nav-item.active {
      color: #06f;
    }
  }
</style>
