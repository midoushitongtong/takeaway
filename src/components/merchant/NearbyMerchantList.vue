<template>
  <section class="merchant-container">
    <p class="title">附件商家</p>
    <div class="merchant-list-container"
         v-if="nearbyMerchantList.length"
    >
      <router-link class="merchant-item"
                   to="/merchant"
                   v-for="(merchant, index) in nearbyMerchantList"
                   :key="index"
      >
        <div class="merchant-logo">
          <img :src="baseImageURL + merchant.image_path" alt="">
        </div>
        <div class="merchant-info">
          <div class="merchant-title">{{ merchant.name }}</div>
          <div class="merchant-rank">
            <start
              :width="merchant.rating * 10 * 2"
            />
            <div class="merchant-sale-score">{{ merchant.rating }}</div>
            <div class="merchant-sale-count">月售{{ merchant.recent_order_num }}单</div>
          </div>
          <div class="merchant-condition-and-location">
            <div class="merchant-condition">
              <span>¥20起送</span>
              <span>{{ merchant.piecewise_agent_fee.tips }}</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div
      v-else
    >
      <img src="../../assets/img/merchant/merchant_list_back.svg">
      <img src="../../assets/img/merchant/merchant_list_back.svg">
      <img src="../../assets/img/merchant/merchant_list_back.svg">
      <img src="../../assets/img/merchant/merchant_list_back.svg">
      <img src="../../assets/img/merchant/merchant_list_back.svg">
      <img src="../../assets/img/merchant/merchant_list_back.svg">
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import Start from '../common/Star';

export default {
  name: 'NearbyMerchantList',
  components: {
    Start
  },
  data () {
    return {
      baseImageURL: 'http://cangdu.org:8001/img/'
    };
  },
  computed: {
    ...mapState('merchant', [
      'nearbyMerchantList'
    ])
  }
};
</script>

<style lang="scss">
  // merchant container
  .merchant-container {
    position: relative;
    margin-top: 10px;
    margin-bottom: 61px;
    padding-top: 10px;
    background-color: #fff;
    color: #666;
    .title {
      margin: 0;
      padding-left: 10px;
      color: #333;
    }
    .merchant-item {
      @include border-bottom-1px(#e3e3e3);
      display: flex;
      font-size: 13px;
      padding: 10px;
      color: #666;
      .merchant-logo img {
        width: 100px;
        height: 80px;
      }
      .merchant-info {
        overflow: hidden;
        width: 100%;
        padding-top: 3px;
        padding-left: 10px;
        .merchant-title {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 1rem;
          font-weight: 600;
          color: #333;
        }
        .merchant-rank {
          display: flex;
          padding-top: 9px;
          padding-bottom: 9px;
          .merchant-sale-score {
            margin-right: 9px;
          }
        }
        .merchant-condition-and-location {
          display: flex;
          justify-content: space-between;
          .merchant-location span:first-child::after,
          .merchant-condition span:first-child::after {
            content: '|';
            margin-left: 5px;
            margin-right: 5px;
          }
          .merchant-location {
            margin-top: 9px;
            color: #999;
          }
        }
      }
    }
  }
</style>
