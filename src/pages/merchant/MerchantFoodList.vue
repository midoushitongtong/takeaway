<template>
  <section class="merchant-food-list-container">
    <section class="merchant-food-category-container">
      <div class="food-category-list">
        <a class="food-category-item" href="javascript:void(0)"
           v-for="(foodCategory, index) in merchantFoodList"
           :key="index"
           :class="{active: merchantFoodListItemActiveIndex === index}"
           @click="handlerMerchantFoodCategoryItem(index)"
        >
          <span>{{ foodCategory.name }}</span>
        </a>
      </div>
    </section>
    <section class="merchant-food-container">
      <div class="food-list"
           ref="foodList"
      >
        <div class="food-item"
             v-for="(foodCategory, index) in merchantFoodList"
             :key="index"
        >
          <h2 class="food-category-name">{{ foodCategory.name }}</h2>
          <div class="food-list-container">
            <a href="javascript:void(0)" class="food"
               v-for="(food, index) in foodCategory.foods"
               :key="index"
               @click="showFoodDetail(food)"
            >
              <div class="food-img">
                <img
                  v-lazy="food.icon">
              </div>
              <div class="food-info">
                <p class="food-name">{{ food.name }}</p>
                <p class="food-desc">{{ food.description }}</p>
                <p class="food-rating">
                  <span>月售{{ food.sellCount }}份</span>
                  <span>好评率{{ food.rating }}%</span>
                </p>
                <p class="food-price">
                  <span class="now">¥{{ food.price }}</span>
                  <span class="old"
                        v-if="food.oldPrice !== ''"
                  >¥{{ food.oldPrice }}</span>
                </p>
              </div>
              <cart-control
                :food="food"
              />
            </a>
          </div>
        </div>
      </div>
      <food-detail
        :food="food"
        ref="foodDetail"
      />
    </section>
    <merchant-cart/>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BScroll from 'better-scroll';
import FoodDetail from '../../components/food/FoodDetail';
import CartControl from '../../components/cart/CartControl';
import MerchantCart from '../../components/cart/MerchantCart';

/* eslint-disable no-new */
export default {
  name: 'MerchantFoodList',
  components: {
    CartControl,
    MerchantCart,
    FoodDetail
  },
  data() {
    return {
      food: {},
      merchantFoodListItemActiveIndexFlag: true,
      merchantFoodListItemActiveIndex: 0,
      merchantFoodContainerScroll: null
    };
  },
  computed: {
    ...mapState('merchant', ['merchantFoodList'])
  },
  async mounted() {
    await this.asyncEditMerchantFoodList();
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    ...mapActions('merchant', ['asyncEditMerchantFoodList']),
    showFoodDetail(food) {
      this.food = food;
      this.$refs.foodDetail.toggleShowFoodDetail();
    },
    _initScroll() {
      // 食品的分类
      new BScroll('.merchant-food-category-container', {
        scrollY: true,
        click: true
      });
      // 食品的列表
      let merchantFoodContainerScroll = (this.merchantFoodContainerScroll = new BScroll(
        '.merchant-food-container',
        {
          scrollY: true,
          click: true,
          probeType: 3,
          swipeTime: 1500
        }
      ));

      const merchantFoodListItem = this.$refs.foodList.children;
      let handlerScroll = y => {
        if (!this.merchantFoodListItemActiveIndexFlag) return;
        let index = 0;
        Array.prototype.slice
          .call(merchantFoodListItem)
          .forEach((item, key) => {
            if (y >= item.offsetTop) {
              index = key;
            }
          });
        this.merchantFoodListItemActiveIndex = index;
      };
      merchantFoodContainerScroll.on('scroll', ({ y }) => {
        handlerScroll(Math.abs(y));
      });
      merchantFoodContainerScroll.on('scrollEnd', ({ y }) => {
        handlerScroll(Math.abs(y));
        this.merchantFoodListItemActiveIndexFlag = true;
      });
    },
    handlerMerchantFoodCategoryItem(index) {
      this.merchantFoodListItemActiveIndex = index;
      this.merchantFoodListItemActiveIndexFlag = false;
      this.merchantFoodContainerScroll.scrollTo(
        0,
        -this.$refs.foodList.children[index].offsetTop,
        500
      );
    }
  }
};
</script>

<style lang="scss">
.merchant-food-list-container {
  overflow: hidden;
  display: flex;
  position: absolute;
  top: 317px;
  bottom: 50px;
  width: 100%;
  background-color: #fff;
  .merchant-food-category-container {
    width: 105px;
    padding-top: 0;
    a {
      display: block;
      padding: 20px;
      text-align: left;
      color: #666;
    }
    a.active {
      color: #06f;
    }
  }
  .merchant-food-container {
    flex: 1;
    .food-item {
      .food-category-name {
        padding: 9px;
        margin: 0;
        border-left: 3px solid #ddd;
        font-size: 13px;
        background-color: #e9e9e9;
        color: #666;
      }
      .food-list-container {
        .food {
          @include border-bottom-1px(#e3e3e3);
          position: relative;
          display: flex;
          padding-top: 10px;
          padding-bottom: 10px;
          .food-img {
            width: 75px;
            height: 75px;
            img {
              max-width: 100%;
            }
          }
          .food-info {
            flex: 1;
            padding-left: 10px;
            font-size: 13px;
            color: #666;
            p {
              margin: 0 0 10px;
            }
            .food-name {
              font-size: 15px;
              color: #000;
            }
            .food-price {
              .now {
                font-weight: bold;
                color: #f60;
              }
              .old {
                margin-left: 5px;
                font-size: 9px;
                text-decoration: line-through;
                color: #666;
              }
            }
            .food-rating {
              display: flex;
              span:first-child {
                margin-right: 15px;
              }
            }
          }
        }
        .food:last-child::after {
          height: 0;
        }
      }
    }
  }
}
</style>
