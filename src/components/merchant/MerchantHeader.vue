<template>
  <section class="merchant-header-container">
    <header :style="{'background-image': `url(${ merchantInfo.bgImg })`}">
      <i class="material-icons"
         @click="$router.back()"
      >chevron_left</i>
    </header>
    <section class="merchant-detail">
      <div class="merchant-logo">
        <img :src="merchantInfo.avatar">
      </div>
      <h3 class="merchant-title"
          @click="showMerchantInfo = true"
      >
        <span>{{ merchantInfo.name }}</span>
        <i class="material-icons" style="width: 23px;height: 23px;">chevron_right</i>
      </h3>
      <p class="merchant-info">
        <span>评价{{ merchantInfo.score }}</span>
        <span>月销{{ merchantInfo.sellCount }}单</span>
        <span>商家配送约{{ merchantInfo.deliveryTime }}分种</span>
      </p>
      <p class="merchant-preferential"
         v-if="merchantInfo.supports"
         @click="showMerchantSupports = true"
      >
        <span class="preferential">
          <mt-badge
            :type="supportsClass[merchantInfo.supports[0].type]"
          >{{ merchantInfo.supports[0].name }}</mt-badge>
          <span class="supports-first">{{ merchantInfo.supports[0].content }}</span>
        </span>
        <span class="preferential">
          <span>{{ merchantInfo.supports.length }}个优惠</span>
          <i class="material-icons" style="width: 23px;height: 23px;">expand_more</i>
        </span>
      </p>
    </section>

    <mt-popup class="merchant-info-detail"
              popup-transition="popup-fade"
              v-model="showMerchantInfo">
      <h3>{{ merchantInfo.name }}</h3>
      <ul>
        <li>
          <p>{{ merchantInfo.score }}</p>
          <p>评分</p>
        </li>
        <li>
          <p>{{ merchantInfo.sellCount }}单</p>
          <p>月售</p>
        </li>
        <li>
          <p>约{{ merchantInfo.deliveryTime }}分钟</p>
          <p>配送时间</p>
        </li>
        <li>
          <p>{{ merchantInfo.deliveryPrice }}元</p>
          <p>配送费</p>
        </li>
        <li>
          <p>{{ merchantInfo.distance }}</p>
          <p>距离</p>
        </li>
      </ul>
      <h6>
        <span>公告</span>
      </h6>
      <h5>{{ merchantInfo.bulletin }}</h5>
    </mt-popup>

    <mt-popup class="merchant-supports-detail"
              v-if="merchantInfo.supports"
              v-model="showMerchantSupports"
              position="bottom">
      <div class="supports-list">
        <div class="supports-item"
             v-for="(support, index) in merchantInfo.supports"
             :key="index"
        >
          <mt-badge
            :type="supportsClass[support.type]"
          >{{ support.name }}
          </mt-badge>
          <span>{{ support.content }}</span>
        </div>
      </div>
    </mt-popup>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MerchantHeader',
  data () {
    return {
      supportsClass: [
        'error',
        'warning',
        'primary'
      ],
      showMerchantInfo: false,
      showMerchantSupports: false
    };
  },
  computed: {
    ...mapState('merchant', [
      'merchantInfo'
    ])
  },
  mounted () {
    this.asyncEditMerchantInfo();
  },
  methods: {
    ...mapActions('merchant', [
      'asyncEditMerchantInfo'
    ])
  }
};
</script>

<style lang="scss">
  .merchant-header-container {
    margin-bottom: 13px;
    header {
      position: relative;
      width: 100%;
      height: 100px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50%;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(rgba(0, 0, 0, .2), transparent);
      }
      .material-icons {
        z-index: 1;
        position: absolute;
        left: 5px;
        top: 5px;
        font-size: 35px;
        color: #fff;
      }
    }
    .merchant-detail {
      position: relative;
      padding-top: 35px;
      text-align: center;
      .merchant-logo {
        position: absolute;
        top: -50px;
        left: 50%;
        width: 95px;
        height: 95px;
        transform: translateX(-50%);
      }
      .merchant-logo img {
        width: 100%;
      }
      .merchant-title {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin: 20px 0 10px;
        font-size: 23px;
        .material-icons {
          font-size: 23px;
        }
      }
      .merchant-info {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
        font-size: 15px;
        color: #555;
        span {
          margin-right: 10px;
        }
      }
      .merchant-preferential {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 10px 0;
        font-size: 15px;
        color: #555;
        .preferential {
          display: flex;
          align-items: center;
          vertical-align: super;
        }
        .supports-first {
          overflow: hidden;
          max-width: 150px;
          margin-left: 5px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .merchant-info-detail {
    width: 80%;
    padding: 20px;
    text-align: center;
    background-color: #fff;
    ul {
      list-style-type: none;
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0;
      li {
        flex: 1;
        p:first-child {
          font-size: 15px;
          font-weight: 600;
        }
        p:last-child {
          font-size: 15px;
          color: #666;
        }
      }
    }
    h6 {
      width: 100px;
      margin: 5px auto;
      background-image: linear-gradient(90deg, #fff, #333 50%, #fff);
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: 50%;
      span {
        padding: 5px;
        font-size: 16px;
        background-color: #fff;
      }
    }
    h5 {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      line-height: 200%;
      text-align: left;
    }
  }

  .merchant-supports-detail {
    width: 100%;
    padding: 10px;
    .supports-list {
      max-height: 200px;
      overflow-y: scroll;
      background-color: #fff;
      div {
        padding: 10px 5px;
        color: #555;
        span:first-child {
          margin-right: 5px;
        }
      }
    }
  }
</style>
