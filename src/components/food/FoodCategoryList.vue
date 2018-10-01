<template>
  <section class="food-category-container">
    <div class="swiper-container"
         v-if="foodCategoryList.length"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide"
             v-for="(buildFoodCategoryInnerList, index) in buildFoodCategoryList"
             :key="index"
        >
          <a href="javascript:void(0)" class="food-category-item"
             v-for="(foodCategory, index2) in buildFoodCategoryInnerList"
             :key="index2"
          >
            <img class="food-img"
                 :src="imageBaseURL + foodCategory.image_url"
            >
            <span class="food-name">{{ foodCategory.title }}</span>
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <img src="../../assets/img/food/food_category_list_back.svg"
         v-else
    >
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';

/* eslint-disable no-new */
export default {
  name: 'FoodCategoryList',
  data () {
    return {
      imageBaseURL: 'https://fuss10.elemecdn.com/'
    };
  },
  computed: {
    ...mapState('food', [
      'foodCategoryList'
    ]),
    buildFoodCategoryList () {
      // 根据 foodCategoryList 生成一个二维数组, 内部的小数组最大数量为 8
      const { foodCategoryList } = this;
      // 构建二维数组
      const buildFoodCategoryList = [];
      // 构建内部的小数组
      let buildFoodCategoryInnerList = [];
      foodCategoryList.forEach(foodCategory => {
        buildFoodCategoryInnerList.push(foodCategory);
        if (buildFoodCategoryInnerList.length === 8) {
          buildFoodCategoryList.push(buildFoodCategoryInnerList);
          buildFoodCategoryInnerList = [];
        }
      });
      if (buildFoodCategoryInnerList.length !== 0) {
        buildFoodCategoryList.push(buildFoodCategoryInnerList);
      }
      // 返回构建好的二维数组
      return buildFoodCategoryList;
    }
  },
  watch: {
    foodCategoryList (value) {
      // foodCategoryList 绑定的 DOM 渲染完成后执行
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination'
          }
        });
      });
    }
  },
  mounted () {
    // 更新食物分类
    this.asyncEditFoodCategoryList();
  },
  methods: {
    ...mapActions('food', [
      'asyncEditFoodCategoryList'
    ])
  }
};
</script>

<style lang="scss">
  $height: 45px;
  .food-category-container {
    position: relative;
    margin-top: $height;
    height: 200px;
    background-color: #fff;
    .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-slide {
        background: #fff;
        .food-category-item {
          display: inline-block;
          width: 25%;
          text-align: center;
          margin-top: 11px;
        }
        .food-category-item .food-img {
          display: block;
          width: 45px;
          height: 45px;
          margin: 0 auto 5px;
        }
        .food-category-item .food-name {
          display: block;
          font-size: 13px;
          color: #666;
        }
      }
      .swiper-pagination {
        bottom: 15px;
      }
    }
  }
</style>
