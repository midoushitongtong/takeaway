<template>
  <div>
    <header class="header-container">
      <a class="search">
        <i class="material-icons">search</i>
      </a>
      <span class="header-location">深圳</span>
    </header>
    <div class="food-category-container">
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
    </div>
    <div class="merchant-container">
      <p class="title">附件商家</p>
      <div class="merchant-list-container">
        <a class="merchant-item">
          <div class="merchant-logo">
            <img src="../../assets/img/merchant/01.jpg" alt="">
          </div>
          <div class="merchant-info">
            <div class="merchant-title">小张烧烤店</div>
            <div class="merchant-rank">
              <div class="merchant-start"></div>
              <div class="merchant-sale-count">月售358单</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';

/* eslint-disable no-new */
export default {
  name: 'Home',
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
  // header container
  $height: 45px;
  .header-container {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $height;
    background-color: #06f;
    color: #fff;
    .search {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: $height;
      height: 100%;
    }
    .search .material-icons {
      font-size: 30px;
    }
    .header-location {
      position: relative;
      left: -$height / 2;
      flex: 1;
      text-align: center;
    }
  }

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

  // merchant container
  .merchant-container {
    position: relative;
    margin-top: 20px;
    background-color: #fff;
    .merchant-item {
      .merchant-logo img {
        width: 75px;
        height: 75px;
      }
    }
  }

</style>
