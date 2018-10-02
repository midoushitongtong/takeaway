import types from '../mutation-types';
import api from '../../api';

export default {
  namespaced: true,
  state: {
    // 附件的店家
    nearbyMerchantList: [],
    // 店铺的信息
    merchantInfo: {},
    merchantFoodList: [],
    merchantRatingList: []
  },
  mutations: {
    [types.EDIT_NEARBY_MERCHANT_LIST] (state, { nearbyMerchantList }) {
      state.nearbyMerchantList = nearbyMerchantList;
    },
    [types.EDIT_MERCHANT_INFO] (state, { merchantInfo }) {
      state.merchantInfo = merchantInfo;
    },
    [types.EDIT_MERCHANT_FOOD_LIST] (state, { merchantFoodList }) {
      state.merchantFoodList = merchantFoodList;
    },
    [types.EDIT_MERCHANT_RATING_LIST] (state, { merchantRatingList }) {
      state.merchantRatingList = merchantRatingList;
    }
  },
  actions: {
    async asyncInitNearbyMerchantList ({ commit, state }, { longitude, latitude }) {
      // 异步获取数据
      const result = await api.merchant.getNearbyMerchantList({ longitude, latitude });
      // 提交 mutations
      if (result.code === 0) {
        commit(types.EDIT_NEARBY_MERCHANT_LIST, { nearbyMerchantList: result.data });
      } else {
        console.log('获取信息失败!');
      }
    },
    async asyncEditMerchantInfo ({ commit }) {
      const result = await api.merchant.getMerchantInfo();
      if (result.code === 0) {
        commit(types.EDIT_MERCHANT_INFO, { merchantInfo: result.data });
      } else {
        console.log('获取信息失败!');
      }
    },
    async asyncEditMerchantFoodList ({ commit }) {
      const result = await api.merchant.getMerchantFoodList();
      if (result.code === 0) {
        commit(types.EDIT_MERCHANT_FOOD_LIST, { merchantFoodList: result.data });
      } else {
        console.log('获取信息失败!');
      }
    },
    async asyncEditMerchantRatingList ({ commit }) {
      const result = await api.merchant.getMerchantRatingList();
      if (result.code === 0) {
        commit(types.EDIT_MERCHANT_RATING_LIST, { merchantRatingList: result.data });
      } else {
        console.log('获取信息失败!');
      }
    }
  },
  getters: {}
};
