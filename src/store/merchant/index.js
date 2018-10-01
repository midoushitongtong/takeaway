import types from '../mutation-types';
import api from '../../api';

export default {
  namespaced: true,
  state: {
    // 附件店家的分类
    nearbyMerchantList: []
  },
  mutations: {
    [types.EDIT_NEARBY_MERCHANT_LIST] (state, nearbyMerchantList) {
      state.nearbyMerchantList = nearbyMerchantList;
    }
  },
  actions: {
    async asyncEditNearbyMerchantList ({ commit, state }, { longitude, latitude }) {
      // 异步获取数据
      const result = await api.merchant.getNearbyMerchantList(longitude, latitude);
      // 提交 mutations
      if (result.code === 0) {
        commit(types.EDIT_NEARBY_MERCHANT_LIST, result.data);
      } else {
        console.log('获取信息失败!');
      }
    }
  },
  getters: {}
};
