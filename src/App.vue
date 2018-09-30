<template>
  <div id="app">
    <router-view/>
    <FooterNav
      v-show="$route.meta.showFooterNav"
    />
  </div>
</template>

<script>
import FooterNav from './components/footer/FooterNav';

export default {
  name: 'App',
  components: {
    FooterNav
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
