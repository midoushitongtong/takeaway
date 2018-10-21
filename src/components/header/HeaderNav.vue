<template>
  <header class="header-container">
    <slot name="left"></slot>
    <span class="header-location">{{ title }}</span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
  props: {
    title: String
  }
};
</script>

<style lang="scss">
$height: 45px;
.header-container {
  z-index: 111;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $height;
  background-color: #06f;
  font-size: 20px;
  color: #fff;
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: absolute;
    width: $height;
    height: 100%;
    color: #fff;
  }
  .search .material-icons {
    font-size: 30px;
  }
  .header-location {
    overflow: hidden;
    position: relative;
    flex: 1;
    padding-left: 50px;
    padding-right: 50px;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
}
</style>
