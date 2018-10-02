import types from '../mutation-types';

export default {
  namespaced: true,
  state: {
    cartList: window.localStorage.getItem('cart') !== null ? JSON.parse(window.localStorage.getItem('cart')) : []
  },
  mutations: {
    [types.INCREMENT_CART_COUNT] (state, { food }) {
      const itemIndex = state.cartList.findIndex(item => {
        return item.food.name === food.name;
      });
      if (itemIndex !== -1) {
        state.cartList[itemIndex].count++;
      } else {
        state.cartList.push({
          food: food,
          count: 1
        });
      }
    },
    [types.DECREMENT_CART_COUNT] (state, { food }) {
      const itemIndex = state.cartList.findIndex(item => {
        return item.food.name === food.name;
      });
      if (itemIndex !== -1) {
        const item = state.cartList[itemIndex];
        if (item.count) {
          // decrement
          item.count--;
          // 为 0, 删除
          if (item.count === 0) {
            state.cartList.splice(itemIndex, 1);
          }
        }
      }
    },
    [types.EDIT_CART_LIST] (state, { cartList }) {
      state.cartList = cartList;
    }
  },
  actions: {
    editCartCount ({ commit, state }, { isIncrement, food }) {
      if (isIncrement) {
        commit(types.INCREMENT_CART_COUNT, { food });
      } else {
        commit(types.DECREMENT_CART_COUNT, { food });
      }
      window.localStorage.setItem('cart', JSON.stringify(state.cartList));
    },
    editCartList ({ commit }, { cartList }) {
      commit(types.EDIT_CART_LIST, { cartList });
    }
  },
  getters: {
    countPrice (state) {
      return state.cartList.reduce((pre, item) => {
        return pre + item.count * item.food.price;
      }, 0);
    }
  }
};
