<template>
  <section>
    <header-nav title="搜索"/>
    <section class="search-container">
      <input type="text" placeholder="请输入商家名称" v-model="merchantName">
      <button @click="submitSearchMerchantList">提交</button>
    </section>
    <section class="search-result-container" v-if="searchMerchantList.length">
      <ul class="merchant-list">
        <router-link :to="`/merchant?id=${merchant.id}`" tag="li" class="merchant-item"
                     v-for="(merchant, index) in searchMerchantList"
                     :key="index"
        >
          <div class="merchant-logo">
            <img
              :src="`http://cangdu.org:8001/img/${merchant.image_path}`"
              alt="">
          </div>
          <div class="merchant-info">
            <p>{{ merchant.name }}</p>
            <p>月售{{ merchant.recent_order_num }}单</p>
            <p>{{ merchant.float_minimum_order_amount }}元起送 / 距离{{ merchant.distance }}</p>
          </div>
        </router-link>
      </ul>
    </section>
  </section>
</template>

<script>
import { Indicator, Toast } from 'mint-ui';
import HeaderNav from '../../components/header/HeaderNav';
import api from '../../api';

export default {
  name: 'Search',
  data () {
    return {
      merchantName: '',
      searchMerchantList: []
    };
  },
  components: {
    HeaderNav
  },
  methods: {
    async submitSearchMerchantList () {
      if (this.merchantName === '') {
        Toast('请输入商家名称');
        return;
      }
      Indicator.open();
      const result = await api.merchant.getMerchantList({
        keyword: this.merchantName,
        geohash: '40.10038,116.36867'
      });
      Indicator.close();
      this.searchMerchantList = result.data;
    }
  }
};
</script>

<style lang="scss">
  .search-container {
    display: flex;
    margin-top: 45px;
    padding: 12px 9px;
    background-color: #fff;
    input {
      width: 79%;
      height: 35px;
      padding: 0 5px;
      border: 3px solid #f2f2f2;
      border-radius: 2px;
      outline: none;
      font-size: 13px;
      color: #333;
      background-color: #f2f2f2;
    }
    button {
      width: 21%;
      margin-left: 10px;
      border: 1px solid #06f;
      background-color: #06f;
      color: #fff;
      cursor: pointer;
    }
  }

  .search-result-container {
    background-color: #fff;
    .merchant-list {
      list-style-type: none;
      padding: 0;
      .merchant-item {
        @include border-bottom-1px(#e5e5e5);
        display: flex;
        padding: 10px;
        .merchant-logo {
          width: 80px;
          height: 80px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .merchant-info {
          padding-left: 13px;
          font-size: 15px;
          color: #666;
          p {
            margin: 0 0 10px;
          }
        }
      }
    }
  }
</style>
