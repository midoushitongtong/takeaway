import types from '../mutation-types';
import api from '../../api';

export default {
  namespaced: true,
  state: {
    // 经度
    longitude: '116.36867',
    // 纬度
    latitude: '40.10038',
    // 地址的对象
    address: {}
  },
  mutations: {
    [types.EDIT_ADDRESS](state, { address }) {
      state.address = address;
    }
  },
  actions: {
    async asyncEditAddress({ commit, state }) {
      // 异步获取数据
      const geoHash = state.latitude + ',' + state.longitude;
      const result = await api.common.getAddress({ geoHash });
      // 提交 mutations
      if (result.code === 0) {
        commit(types.EDIT_ADDRESS, { address: result.data });
      } else {
        console.log('获取信息失败!');
      }
    }
  },
  getters: {}
};
