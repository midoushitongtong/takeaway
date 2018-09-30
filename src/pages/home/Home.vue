<template>
  <section>
    <header-nav title="深圳">
      <router-link to="/search" class="search" slot="left">
        <i class="material-icons">search</i>
      </router-link>
    </header-nav>
    <section class="food-category-container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:void(0)" class="food-category-item">
              <img src="../../assets/img/food/01.jpeg" class="food-img">
              <span class="food-name">甜品饮品</span>
            </a>
            <a href="javascript:void(0)" class="food-category-item">
              <img src="../../assets/img/food/01.jpeg" class="food-img">
              <span class="food-name">甜品饮品</span>
            </a>
            <a href="javascript:void(0)" class="food-category-item">
              <img src="../../assets/img/food/01.jpeg" class="food-img">
              <span class="food-name">甜品饮品</span>
            </a>
            <a href="javascript:void(0)" class="food-category-item">
              <img src="../../assets/img/food/01.jpeg" class="food-img">
              <span class="food-name">甜品饮品</span>
            </a>
            <a href="javascript:void(0)" class="food-category-item">
              <img src="../../assets/img/food/01.jpeg" class="food-img">
              <span class="food-name">甜品饮品</span>
            </a>
            <a href="javascript:void(0)" class="food-category-item">
              <img src="../../assets/img/food/01.jpeg" class="food-img">
              <span class="food-name">甜品饮品</span>
            </a>
            <a href="javascript:void(0)" class="food-category-item">
              <img src="../../assets/img/food/01.jpeg" class="food-img">
              <span class="food-name">甜品饮品</span>
            </a>
            <a href="javascript:void(0)" class="food-category-item">
              <img src="../../assets/img/food/01.jpeg" class="food-img">
              <span class="food-name">甜品饮品</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:void(0)" class="food-category-item">
              <img src="../../assets/img/food/01.jpeg" class="food-img">
              <span class="food-name">甜品饮品</span>
            </a>
            <a href="javascript:void(0)" class="food-category-item">
              <img src="../../assets/img/food/01.jpeg" class="food-img">
              <span class="food-name">甜品饮品</span>
            </a>
            <a href="javascript:void(0)" class="food-category-item">
              <img src="../../assets/img/food/01.jpeg" class="food-img">
              <span class="food-name">甜品饮品</span>
            </a>
            <a href="javascript:void(0)" class="food-category-item">
              <img src="../../assets/img/food/01.jpeg" class="food-img">
              <span class="food-name">甜品饮品</span>
            </a>
            <a href="javascript:void(0)" class="food-category-item">
              <img src="../../assets/img/food/01.jpeg" class="food-img">
              <span class="food-name">甜品饮品</span>
            </a>
            <a href="javascript:void(0)" class="food-category-item">
              <img src="../../assets/img/food/01.jpeg" class="food-img">
              <span class="food-name">甜品饮品</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <section class="merchant-container">
      <p class="title">附件商家</p>
      <home-merchant-list/>
    </section>
  </section>
</template>

<script>
import HeaderNav from '../../components/header/HeaderNav';
import HomeMerchantList from '../../components/merchant/HomMerchantList';

import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';

/* eslint-disable no-new */
export default {
  name: 'Home',
  components: {
    HeaderNav,
    HomeMerchantList
  },
  mounted () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
};
</script>

<style lang="scss">
  $height: 45px;
  // product container
  .food-category-container {
    position: relative;
    margin-top: $height;
    height: 200px;
    .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-slide {
        background: #fff;
        .food-category-item {
          display: inline-block;
          width: 25%;
          text-align: center;
          margin-top: 13px;
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
        bottom: 5px;
      }
    }
  }

</style>
