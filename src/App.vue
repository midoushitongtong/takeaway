<template>
  <div id="app">
    <router-view></router-view>
    <FooterNav
      v-show="$route.meta.showFooterNav"
    />
  </div>
</template>

<script>
import FooterNav from './components/footer/FooterNav';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    FooterNav
  },
  mounted () {
    // 更新地址信息
    this.asyncEditAddress();
  },
  methods: {
    ...mapActions('common', [
      'asyncEditAddress'
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
