import types from '../mutation-types';
import api from '../../api';

export default {
  namespaced: true,
  state: {
    userInfo: {}
  },
  mutations: {
    [types.EDIT_USER_INFO] (state, { userInfo }) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    editUserInfo ({ commit }, { userInfo }) {
      console.log(userInfo);
      commit(types.EDIT_USER_INFO, { userInfo });
    },
    async asyncInitUserInfo ({ commit }) {
      const result = await api.account.getUserInfo();
      if (result.code === 0) {
        commit(types.EDIT_USER_INFO, { userInfo: result.data });
      }
    }
  },
  getters: {}
};
