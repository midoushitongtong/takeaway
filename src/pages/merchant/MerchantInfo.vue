<template>
  <section class="merchant-info-container">
    <div>
      <div class="merchant-info">
        <h5 class="title">配送信息</h5>
        <p>由{{ merchantInfo.description }}提供配送，约{{ merchantInfo.deliveryTime }}分钟送达，距离{{ merchantInfo.distance }}</p>
        <p>配送费￥{{ merchantInfo.deliveryPrice }}</p>
      </div>
      <div class="merchant-info">
        <h5 class="title">服务与活动</h5>
        <ul class="supports-list">
          <li
            v-for="(support, index) in merchantInfo.supports"
            :key="index"
          >
            <span class="badge"
                  :class="supportsClass[support.type]"
            >{{ support.name }}</span>
            <span class="name">{{ support.content }}</span>
          </li>
        </ul>
      </div>
      <div class="merchant-info">
        <h5 class="title">商家实景</h5>
        <div class="album-list-container-wrapper">
          <div class="album-list-container">
            <ul class="album-list">
              <li
                v-for="(pic, index) in merchantInfo.pics"
                :key="index"
              >
                <img :src="pic">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="merchant-info">
        <h5 class="title">商家信息</h5>
        <p>{{ merchantInfo.bulletin }}</p>
        <ul class="merchant-info-list">
          <li>
            <span>品类</span>
            <span>{{ merchantInfo.category }}</span>
          </li>
          <li>
            <span>商家电话</span>
            <span>{{ merchantInfo.phone }}</span>
          </li>
          <li>
            <span>地址</span>
            <span style="max-width: 56vw;">{{ merchantInfo.address }}</span>
          </li>
          <li>
            <span>营业时间</span>
            <span>{{ merchantInfo.workTime }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import BScroll from 'better-scroll';
import { mapState } from 'vuex';

/* eslint-disable no-new */
export default {
  name: 'MerchantInfo',
  data() {
    return {
      supportsClass: ['error', 'warning', 'primary']
    };
  },
  computed: {
    ...mapState('merchant', ['merchantInfo'])
  },
  mounted() {
    new BScroll('.merchant-info-container', {
      scrollY: true,
      click: true
    });
    new BScroll('.album-list-container-wrapper', {
      scrollX: true,
      click: true
    });
  }
};
</script>

<style lang="scss">
.merchant-info-container {
  overflow: hidden;
  position: absolute;
  top: 312px;
  bottom: 0;
  width: 100%;
  background-color: #f1f1f1;
  p {
    margin: 0;
  }
  .merchant-info {
    padding: 15px 15px;
    margin-bottom: 15px;
    background-color: #fff;
    h5 {
      margin: 0 0 15px;
      font-size: 20px;
      font-weight: bold;
      color: #000;
    }
    p {
      line-height: 150%;
      font-size: 15px;
      color: #666;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    .supports-list {
      li {
        margin-bottom: 15px;
        color: #555;
        .badge {
          margin-right: 5px;
          padding: 2px 9px;
          border-radius: 12px;
          font-size: 13px;
          color: #fff;
        }
        .badge.error {
          background-color: #f44336;
        }
        .badge.warning {
          background-color: #ffc107;
        }
        .badge.primary {
          background-color: #26a2ff;
        }
      }
    }
    .album-list-container-wrapper {
      position: relative;
      overflow: hidden;
      height: 110px;
      .album-list-container {
        position: absolute;
        top: 0;
        left: 0;
        .album-list {
          display: flex;
          li {
            width: 111px;
            height: 75px;
            margin-right: 10px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .merchant-info-list {
      li {
        @include border-bottom-1px(#e5e5e5);
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
      }
    }
  }
}
</style>
