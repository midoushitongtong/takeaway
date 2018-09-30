<template>
  <section>
    <header-nav title="搜索"/>
    <section class="search-container">
      <input type="text">
      <button>提交</button>
    </section>
  </section>
</template>

<script>
import HeaderNav from '../../components/header/HeaderNav';

export default {
  name: 'Search',
  components: {
    HeaderNav
  }
};
</script>

<style lang="scss">
  .search-container {
    display: flex;
    margin-top: 45px;
    padding: 12px 9px;
    background-color: #fff;
    input {
      width: 79%;
      height: 35px;
      padding: 0 5px;
      border: 3px solid #f2f2f2;
      border-radius: 2px;
      outline: none;
      font-size: 13px;
      color: #333;
      background-color: #f2f2f2;
    }
    button {
      width: 21%;
      margin-left: 10px;
      border: 1px solid #06f;
      background-color: #06f;
      color: #fff;
      cursor: pointer;
    }
  }
</style>
