<template>
  <section class="alert-tooltip-container">
    <div>
      <p class="alert-text">{{ alertText }}</p>
      <button class="alert-button" @click="closeAlertTooltip">确认</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AlertTooltip',
  props: {
    alertText: String
  },
  methods: {
    closeAlertTooltip () {
      this.$emit('closeAlertTooltip');
    }
  }
};
</script>

<style lang="scss">
  .alert-tooltip-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    div {
      position: relative;
      width: 80%;
      height: 150px;
      text-align: center;
      border-radius: 5px;
      background-color: #fff;
      button {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        border: 0;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        color: #fff;
        background-color: #06f;
      }
    }
  }
</style>
