<template>
  <section class="merchant">
    <merchant-header/>
    <div class="tab-container">
      <router-link class="tab-item"
                   to="/merchant/foods"
      >点餐
      </router-link>
      <router-link class="tab-item"
                   to="/merchant/ratings"
      >评价
      </router-link>
      <router-link class="tab-item"
                   to="/merchant/info"
      >信息
      </router-link>
    </div>
    <router-view/>
  </section>
</template>

<script>
import MerchantHeader from '../../components/merchant/MerchantHeader';
import { mapActions } from 'vuex';

export default {
  name: 'Merchant',
  components: {
    MerchantHeader
  },
  mounted () {
    this.asyncEditMerchantInfo();
    this.asyncEditMerchantFoodList();
    this.asyncEditMerchantRatingList();
  },
  methods: {
    ...mapActions('merchant', [
      'asyncEditMerchantInfo',
      'asyncEditMerchantFoodList',
      'asyncEditMerchantRatingList'
    ])
  }
};
</script>

<style lang="scss">
  .merchant {
    height: 100vh;
    background-color: #fff;
  }

  .tab-container {
    @include border-bottom-1px(#e5e5e5);
    display: flex;
    justify-content: space-around;
    padding-bottom: 15px;
    .tab-item {
      display: block;
      width: 100%;
      padding-top: 15px;
      padding-bottom: 15px;
      text-align: center;
      color: #666;
    }
    .tab-item.active {
      color: #06f;
      @include border-bottom-1px(#06f);
    }
    .tab-item.active::after {
      width: 50%;
      height: 2px;
      transform: translateX(50%);
    }
  }
</style>
