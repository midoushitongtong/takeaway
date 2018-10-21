<template>
  <section>
    <section class="merchant-cart-container"
             :class="{active: cartList.length}"
    >
      <span class="icon"
            @click="toggleShowCartList"
      >
        <i class="material-icons">shopping_cart</i>
        <span class="badge"
              v-if="cartList.length"
        >{{ cartList.length }}</span>
      </span>
      <span class="cart-info"
            @click="toggleShowCartList">
        <span
          v-if="cartList.length"
        >¥{{ countPrice }}</span>
        <span class="condition"
              v-if="cartList.length"
        >配送费¥{{  merchantInfo.deliveryPrice }}</span>
        <span v-else>未选购商品</span>
      </span>
      <button type="button">{{ cartStatus }}</button>
    </section>

    <mt-popup class="cart-info-container"
              v-if="cartList"
              v-model="showCartListFlag"
              position="bottom">
      <div class="cart-status">
        <span>已选商品</span>
        <span
          @click="clearCartList"
        >清空</span>
      </div>
      <div class="cart-list-container">
        <div class="cart-list"
        >
          <div class="cart-item"
               v-for="(cart, index) in cartList"
               :key="index"
          >
            <span>{{ cart.food.name }}</span>
            <cart-control
              :food="cart.food"
            />
          </div>
        </div>
      </div>
    </mt-popup>
  </section>
</template>

<script>
import { MessageBox } from 'mint-ui';
import BScroll from 'better-scroll';
import { mapState, mapActions, mapGetters } from 'vuex';
import CartControl from '../../components/cart/CartControl';

/* eslint-disable no-new */
export default {
  name: 'MerchantCart',
  components: {
    CartControl
  },
  data() {
    return {
      showCartListFlag: false
    };
  },
  computed: {
    ...mapState('merchant', ['merchantInfo']),
    ...mapState('cart', ['cartList']),
    ...mapGetters('cart', ['countPrice']),
    cartStatus() {
      if (this.countPrice === 0) {
        return `¥${this.merchantInfo.minPrice}元起送`;
      } else if (this.merchantInfo.minPrice > this.countPrice) {
        return `还差¥${this.merchantInfo.minPrice - this.countPrice}元起送`;
      } else {
        return '结算';
      }
    }
  },
  watch: {
    cartList(val) {
      if (val.length === 0) {
        this.showCartListFlag = false;
      }
    }
  },
  methods: {
    ...mapActions('cart', ['editCartList']),
    toggleShowCartList() {
      if (this.cartList.length) {
        this.showCartListFlag = !this.showCartListFlag;
        this.$nextTick(() => {
          if (!this.cartListContainerScroll) {
            this.cartListContainerScroll = new BScroll('.cart-list-container', {
              scrollY: true,
              click: true
            });
          } else {
            this.cartListContainerScroll.refresh();
          }
        });
      }
    },
    clearCartList() {
      MessageBox.confirm('确定清空？')
        .then(action => {
          this.editCartList({ cartList: [] });
          this.showCartListFlag = false;
        })
        .catch(action => {
          console.log('c');
        });
    }
  }
};
</script>

<style lang="scss">
.merchant-cart-container {
  z-index: 9999;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #2a2626;
  &.active {
    .icon {
      background-color: #06f;
    }
    button {
      border-color: #06f;
      background-color: #06f;
    }
  }
  .icon {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff;
    background-color: #555;
    box-shadow: 0 0 0 5px #2a2626;
    .badge {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -10px;
      right: -10px;
      width: 15px;
      height: 15px;
      padding: 5px;
      border-radius: 50%;
      background-color: #f60;
    }
  }
  .cart-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    padding-left: 90px;
    color: #fff;
    span.condition {
      margin-top: 5px;
      font-size: 13px;
      color: #ddd;
    }
  }
  button {
    width: 105px;
    border: 1px solid #555;
    background-color: #555;
    font-size: 13px;
    color: #fff;
  }
}

.cart-info-container {
  z-index: 10;
  width: 100%;
  padding-bottom: 69px;
  .cart-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    height: 25px;
    background-color: #e3e3e3;
  }
  .cart-list-container {
    overflow: hidden;
    max-height: 300px;
    .cart-list {
      .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: 20px;
        .cart-control {
          position: static;
        }
      }
    }
  }
}
</style>
