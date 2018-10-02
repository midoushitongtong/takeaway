<template>
  <mt-popup class="food-detail-container"
            popup-transition="popup-fade"
            v-model="showFoodDetail">
    <div class="food-img">
      <img
        :src="food.image"
      >
      <p class="description">{{ food.info }}</p>
    </div>
    <div class="food-info">
      <p class="name">{{ food.name }}</p>
      <p class="rating">
        <span>月售{{ food.sellCount }}份</span>
        <span>好评率{{ food.rating }}份</span>
      </p>
      <p class="price">
        <span class="now">¥{{ food.price }}</span>
        <span class="old"
              v-show="food.oldPrice"
        >¥{{ food.oldPrice }}</span>
      </p>
    </div>
    <cart-control
      :food="food"
    />
  </mt-popup>
</template>

<script>
import CartControl from '../../components/cart/CartControl';

export default {
  name: 'FoodDetail',
  components: {
    CartControl
  },
  props: {
    food: Object
  },
  data () {
    return {
      showFoodDetail: false
    };
  },
  methods: {
    toggleShowFoodDetail () {
      this.showFoodDetail = !this.showFoodDetail;
    }
  }
};
</script>

<style lang="scss">
  .food-detail-container {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 80%;
    background-color: #fff;
    .food-img {
      position: relative;
      width: 100%;
      height: 300px;
      img {
        width: 100%;
        height: 100%;
      }
      .description {
        position: absolute;
        bottom: 0;
        left: 20px;
        font-size: 13px;
        letter-spacing: 1px;
        color: #fff;
      }
    }
    .food-info {
      padding: 5px 20px;
      font-size: 13px;
      color: #666;
      .name {
        font-size: 15px;
        font-weight: bold;
        color: #000;
      }
      .price {
        .now {
          color: #f60;
        }
        .old {
          margin-left: 5px;
          font-size: 12px;
          text-decoration: line-through;
        }
      }
    }
  }
</style>
