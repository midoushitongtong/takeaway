<template>
  <section class="merchant-rating-container">
    <div>
      <section class="merchant-rating-base">
        <div class="rating-base-left">
          <p>{{ merchantInfo.score }}</p>
          <p>综合评分</p>
          <p>高于周边商家{{ merchantInfo.rankRate }}%</p>
        </div>
        <div class="rating-base-right">
          <p>
            <span>服务态度</span>
            <span>{{ merchantInfo.serviceScore }}</span>
            <star :width="merchantInfo.serviceScore * 20"/>
          </p>
          <p>
            <span>商品评分</span>
            <span>{{ merchantInfo.foodScore }}</span>
            <star :width="merchantInfo.foodScore * 20"/>
          <p>
            <span>送达时间</span>
            <span>{{ merchantInfo.deliveryTime }}分钟</span>
          </p>
        </div>
      </section>
      <div class="merchant-rating-user">
        <div class="merchant-rating-user-category">
          <button type="button" @click="setFilterMerchantRatingType(0)">全部 {{ merchantRatingList.length }}</button>
          <button type="button" @click="setFilterMerchantRatingType(1)">满意 {{ merchantRatingPositiveLength }}</button>
          <button type="button" @click="setFilterMerchantRatingType(2)">不满意 {{ merchantRatingList.length -
            merchantRatingPositiveLength }}
          </button>
          <p style="margin-bottom: 0;">
            <mt-switch v-model="isFilterOnlyMerchantRatingText">只看有内容的评论</mt-switch>
          </p>
        </div>
        <div class="merchant-rating-user-list-container">
          <div class="merchant-rating-user-list">
            <div class="merchant-rating-user-list-item"
                 v-for="(merchantRating, index) in filterRatingList"
                 :key="index"
            >
              <div class="rating-user-img">
                <img :src="merchantRating.avatar" alt="">
              </div>
              <div class="rating-user-detail">
                <p class="username-and-created-at">
                  <span class="username">{{ merchantRating.username }}</span>
                  <span class="created-at">{{ merchantRating.rateTime | dateFormat }}</span>
                </p>
                <p class="delivery-time">{{ merchantRating.deliveryTime }}</p>
                <p class="rating-text">{{ merchantRating.text }}</p>
                <div class="rating-type">
              <span class="material-icons"
                    :style="{color: merchantRating.rateType === 0 ? '#f60' : '#555'}"
              >
                {{ merchantRating.rateType === 0 ? 'thumb_up_alt' : 'thumb_down_alt' }}
              </span>
                  <div>
                <span
                  v-for="(recommend, index) in merchantRating.recommend"
                  :key="index"
                >{{ recommend }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BScroll from 'better-scroll';
import { mapState, mapActions } from 'vuex';
import Star from '../../components/common/Star';

/* eslint-disable no-new */
export default {
  name: 'MerchantRatingList',
  components: {
    Star
  },
  data() {
    return {
      isFilterOnlyMerchantRatingText: true,
      filterMerchantRatingType: 0
    };
  },
  computed: {
    ...mapState('merchant', ['merchantInfo', 'merchantRatingList']),
    merchantRatingPositiveLength(state) {
      return state.merchantRatingList.reduce((pre, item) => {
        return pre + (item.rateType === 0 ? 1 : 0);
      }, 0);
    },
    filterRatingList() {
      const {
        merchantRatingList,
        isFilterOnlyMerchantRatingText,
        filterMerchantRatingType
      } = this;
      return merchantRatingList.filter(item => {
        // 过滤
        let flag = true;
        if (isFilterOnlyMerchantRatingText) {
          // 过滤空内容
          if (item.text === '') flag = false;
        }
        if (filterMerchantRatingType !== 0) {
          // 过滤类型
          switch (filterMerchantRatingType) {
            case 1:
              if (item.rateType !== 0) flag = false;
              break;
            case 2:
              if (item.rateType !== 1) flag = false;
          }
        }
        return flag;
      });
    }
  },
  watch: {
    filterRatingList() {
      this.$nextTick(() => {
        if (!this.merchantRatingContainerScroll) {
          this.merchantRatingContainerScroll = new BScroll(
            '.merchant-rating-container',
            {
              scrollY: true,
              click: true
            }
          );
        } else {
          this.merchantRatingContainerScroll.refresh();
        }
      });
    }
  },
  async mounted() {
    await this.asyncEditMerchantRatingList();
  },
  methods: {
    ...mapActions('merchant', ['asyncEditMerchantRatingList']),
    setFilterMerchantRatingType(type) {
      this.filterMerchantRatingType = type;
    }
  }
};
</script>

<style lang="scss">
.merchant-rating-container {
  overflow: hidden;
  position: absolute;
  top: 312px;
  bottom: 0;
  width: 100%;
  background-color: #f1f1f1;
  .merchant-rating-base {
    background-color: #fff;
    display: flex;
    padding: 20px 0;
    .rating-base-left {
      flex: 1;
      padding-top: 10px;
      text-align: center;
      border-right: 1px solid #e6e6e6;
      p {
        margin: 0 0 11px;
      }
      p:nth-child(1) {
        font-size: 29px;
        color: #f60;
      }
      p:nth-child(3) {
        color: #555;
      }
    }
    .rating-base-right {
      flex: 1;
      padding-top: 10px;
      p {
        display: flex;
        margin: 0 0 20px;
        padding-left: 20px;
        font-size: 15px;
        color: #333;
      }
      p:nth-child(1),
      p:nth-child(2) {
        span:nth-child(2) {
          margin-left: 5px;
        }
        .start-container {
          margin-left: 5px;
        }
      }
      p:nth-child(3) span:last-child {
        margin-left: 5px;
        color: #555;
      }
    }
  }
  .merchant-rating-user {
    margin-top: 20px;
    background: #fff;
    .merchant-rating-user-category {
      padding: 20px;
      @include border-bottom-1px(#e3e3e3);
      button {
        padding: 10px;
        border: 1px solid #06f;
        background-color: #06f;
        color: #fff;
        margin-right: 11px;
      }
    }
    .merchant-rating-user-list-container {
      background: #fff;
      .merchant-rating-user-list {
        .merchant-rating-user-list-item {
          display: flex;
          padding: 25px 25px 15px;
          @include border-bottom-1px(#e1e1e1);
          .rating-user-img {
            width: 45px;
            height: 45px;
            img {
              border-radius: 50%;
              width: 100%;
            }
          }
          .rating-user-detail {
            flex: 1;
            padding-left: 20px;
            p {
              margin: 0 0 10px;
            }
            .username-and-created-at {
              display: flex;
              justify-content: space-between;
              span:last-child {
                color: #a69999;
              }
            }
            .delivery-time {
              color: #a69999;
            }
            .rating-text {
              font-size: 15px;
              line-height: 150%;
            }
            .rating-type {
              display: flex;
              align-items: center;
              margin-top: 20px;
              .material-icons {
                align-self: flex-start;
                width: 35px;
                font-size: 20px;
                color: #f60;
              }
              div {
                flex: 1;
                span {
                  display: inline-block;
                  margin-right: 5px;
                  margin-bottom: 5px;
                  padding: 5px;
                  border: 1px solid #e5dbdb;
                  border-radius: 5px;
                  font-size: 13px;
                  color: #a69999;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
