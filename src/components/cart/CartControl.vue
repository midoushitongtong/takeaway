<template>
  <div class="cart-control">
    <transition name="fade">
      <i class="material-icons"
         v-if="cartCount"
         @click.stop="_editCartCount(false)"
      >remove
      </i>
    </transition>
    <transition name="fade">
      <span
        v-if="cartCount"
      >{{ cartCount }}
    </span>
    </transition>
    <i class="material-icons"
       @click.stop="_editCartCount(true)"
    >add
    </i>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'CartControl',
  data() {
    return {
      cartCount: 0
    };
  },
  props: {
    food: Object
  },
  computed: {
    ...mapState('cart', ['cartList'])
  },
  watch: {
    food: {
      deep: true,
      handler(val) {
        this.updateCartCount();
      }
    },
    cartList: {
      deep: true,
      handler(val) {
        this.updateCartCount();
      }
    }
  },
  mounted() {
    this.updateCartCount();
  },
  methods: {
    ...mapActions('cart', ['editCartCount']),
    updateCartCount() {
      let item = this.cartList.find(item => {
        return item.food.name === this.food.name;
      });
      if (item !== undefined) {
        this.cartCount = item.count;
      } else {
        this.cartCount = 0;
      }
    },
    _editCartCount(isIncrement) {
      if (isIncrement) {
        this.editCartCount({ isIncrement: true, food: this.food });
      } else {
        this.editCartCount({ isIncrement: false, food: this.food });
      }
    }
  }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(50px) rotateX(150deg);
}
.cart-control {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 15px;
  span {
    margin: 0 5px;
  }
  .material-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 19px;
    width: 19px;
    padding: 1px;
    border-radius: 50%;
    background-color: #06f;
    color: #fff;
    font-size: 13px;
  }
}
</style>
