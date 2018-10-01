<template>
  <div id="app">
    <router-view></router-view>
    <FooterNav
      v-show="$route.meta.showFooterNav"
    />
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import FooterNav from './components/footer/FooterNav';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    FooterNav
  },
  async mounted () {
    Indicator.open();
    // 更新地址信息
    await this.asyncEditAddress();
    // 更新用户信息
    await this.asyncInitUserInfo();
    Indicator.close();
  },
  methods: {
    ...mapActions('common', [
      'asyncEditAddress'
    ]),
    ...mapActions('account', [
      'asyncInitUserInfo'
    ])
  }
};
</script>

<style lang="scss">
  body {
    background: #f1f1f1;
  }

  a {
    text-decoration: none;
  }
</style>
