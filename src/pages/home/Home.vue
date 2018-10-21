<template>
  <section>
    <header-nav :title="address.name">
      <router-link to="/search" class="search" slot="left">
        <i class="material-icons">search</i>
      </router-link>
    </header-nav>
    <food-category-list/>
    <nearby-merchant-list/>
  </section>
</template>

<script>
import HeaderNav from '../../components/header/HeaderNav';
import FoodCategoryList from '../../components/food/FoodCategoryList';
import NearbyMerchantList from '../../components/merchant/NearbyMerchantList';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    HeaderNav,
    FoodCategoryList,
    NearbyMerchantList
  },
  computed: {
    ...mapState('common', ['address'])
  }
};
</script>

<style lang="scss">
</style>
