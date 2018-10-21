<template>
  <div>
    <header-nav title="订单列表"/>
    <section class="order-no-sign-in">
      <img src="../../assets/img/order/person.png" alt="">
      <button>功能未开发</button>
    </section>
  </div>
</template>

<script>
import HeaderNav from '../../components/header/HeaderNav';

export default {
  name: 'Order',
  components: {
    HeaderNav
  }
};
</script>

<style lang="scss">
  .order-no-sign-in {
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 26vw;
    button {
      padding: 10px;
      border: 1px solid #06f;
      background-color: #06f;
      text-align: center;
      color: #fff;
      cursor: pointer;
    }
  }
</style>
