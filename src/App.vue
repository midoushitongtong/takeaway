<template>
  <div id="app">
    <router-view></router-view>
    <FooterNav
      v-if="$route.meta.showFooterNav"
    />
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import FooterNav from './components/footer/FooterNav';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    FooterNav
  },
  computed: {
    ...mapState('common', [
      'address'
    ])
  },
  async mounted () {
    Indicator.open();
    // 更新地址信息
    await this.asyncEditAddress();
    // 更新用户信息
    await this.asyncInitUserInfo();
    // 更新附件商家
    await this.asyncInitNearbyMerchantList({
      longitude: this.address.longitude,
      latitude: this.address.latitude
    });
    Indicator.close();
  },
  methods: {
    ...mapActions('common', [
      'asyncEditAddress'
    ]),
    ...mapActions('account', [
      'asyncInitUserInfo'
    ]),
    ...mapActions('merchant', [
      'asyncInitNearbyMerchantList'
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
