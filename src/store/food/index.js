import types from '../types';
import api from '../../api';

export default {
  namespaced: true,
  state: {
    // 食品的分类
    foodCategoryList: []
  },
  mutations: {
    [types.EDIT_FOOD_CATEGORY_LIST] (state, foodCategoryList) {
      state.foodCategoryList = foodCategoryList;
    }
  },
  actions: {
    async asyncEditFoodCategoryList ({ commit }) {
      // 异步获取数据
      const result = await api.food.getFoodCategoryList();
      // 提交 mutations
      if (result.code === 0) {
        commit(types.EDIT_FOOD_CATEGORY_LIST, result.data);
      } else {
        console.log('获取信息失败!');
      }
    }
  },
  getters: {}
};
