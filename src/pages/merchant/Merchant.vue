<template>
  <section class="merchant">
    <merchant-header/>
    <div class="tab-container">
      <router-link class="tab-item"
                   to="/merchant/foods"
                   replace
      >点餐
      </router-link>
      <router-link class="tab-item"
                   to="/merchant/ratings"
                   replace
      >评价
      </router-link>
      <router-link class="tab-item"
                   to="/merchant/info"
                   replace
      >信息
      </router-link>
    </div>
    <transition :name="transitionName">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import MerchantHeader from '../../components/merchant/MerchantHeader';

export default {
  name: 'Merchant',
  data () {
    return {
      transitionName: ''
    };
  },
  components: {
    MerchantHeader
  },
  watch: {
    $route (to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    }
  }

};
</script>

<style lang="scss">
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    position: absolute;
    will-change: transform;
    transition: transform .5s;
  }

  .slide-left-enter {
    transform: translate3d(510%, 0, 0);
  }

  .slide-left-leave-active {
    transform: translate3d(-510%, 0, 0);
  }

  .slide-right-enter {
    transform: translate3d(-510%, 0, 0);
  }

  .slide-right-leave-active {
    transform: translate3d(510%, 0, 0);
  }

  .merchant {
    height: 100vh;
    background-color: #fff;
  }

  .tab-container {
    @include border-bottom-1px(#e5e5e5);
    display: flex;
    justify-content: space-around;
    padding-bottom: 15px;
    .tab-item {
      display: block;
      width: 100%;
      padding-top: 15px;
      padding-bottom: 15px;
      text-align: center;
      color: #666;
    }
    .tab-item.active {
      color: #06f;
      @include border-bottom-1px(#06f);
    }
    .tab-item.active::after {
      width: 50%;
      height: 2px;
      transform: translateX(50%);
    }
  }
</style>
