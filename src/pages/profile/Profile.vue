<template>
  <section>
    <header-nav title="我的"/>
    <section class="no-sign-in-container">
      <router-link class="user-info"
                   :to="userInfo.id ? '/profileDetail' : '/signIn'"
      >
        <i class="material-icons" style="width: 85px;height: 85px;">person</i>
        <section class="action-tooltip">
          <p>{{ userInfo.name || userInfo.phone || '登陆/注册' }}</p>
        </section>
      </router-link>
    </section>
    <section class="account-asset-container">
      <div class="money-container">
        <p class="money">0.00</p>
        <p>我的余额</p>
      </div>
      <div class="preferential-container">
        <p class="preferential">0</p>
        <p>我的优惠</p>
      </div>
      <div class="point-container">
        <p class="point">0</p>
        <p>我的积分</p>
      </div>
    </section>
    <section class="function-list-group">
      <a class="list-group-item" href="javascript: void(0)">
        <i class="material-icons">view_list</i>
        <span>我的订单</span>
        <i class="material-icons">chevron_right</i>
      </a>
      <a class="list-group-item" href="javascript: void(0)">
        <i class="material-icons">view_list</i>
        <span>我的订单</span>
        <i class="material-icons">chevron_right</i>
      </a>
    </section>
    <section class="function-list-group">
      <a class="list-group-item" href="javascript: void(0)">
        <i class="material-icons">view_list</i>
        <span>我的订单</span>
        <i class="material-icons">chevron_right</i>
      </a>
      <a class="list-group-item" href="javascript: void(0)">
        <i class="material-icons">view_list</i>
        <span>我的订单</span>
        <i class="material-icons">chevron_right</i>
      </a>
    </section>
    <mt-button type="danger" size="large"
               v-if="userInfo.id"
               @click="signOut"
    >退出登陆
    </mt-button>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { MessageBox, Toast } from 'mint-ui';
import HeaderNav from '../../components/header/HeaderNav';
import api from '../../api';

export default {
  name: 'Profile',
  components: {
    HeaderNav
  },
  computed: {
    ...mapState('account', ['userInfo'])
  },
  mounted() {},
  methods: {
    ...mapActions('account', ['editUserInfo']),
    async signOut() {
      MessageBox.confirm('确认退出吗?').then(
        async action => {
          // 请求退出
          const result = await api.account.signOut();
          if (result.code === 0) {
            this.editUserInfo({ userInfo: {} });
            Toast('退出成功');
          }
        },
        action => {
          console.log('取消退出操作');
        }
      );
    }
  }
};
</script>

<style lang="scss">
.no-sign-in-container {
  margin-top: 45px;
  .user-info {
    display: flex;
    align-items: center;
    background: #06f;
    padding: 10px;
    color: #fff;
    .material-icons {
      font-size: 85px;
    }
    .action-tooltip {
      margin-left: 20px;
      font-size: 23px;
    }
  }
}

.account-asset-container {
  display: flex;
  background-color: #fff;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;
    border-right: 1px solid #e5e5e5;
    text-align: center;
    font-size: 20px;
    color: #666;
    p {
      margin: 0;
    }
    p:first-child {
      margin-bottom: 10px;
      font-size: 25px;
    }
    .money {
      color: #f60;
    }
    .preferential {
      color: red;
    }
    .point {
      color: #06f;
    }
  }
}

.function-list-group {
  @include border-bottom-1px(#e5e5e5);
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  .list-group-item {
    @include border-bottom-1px(#e5e5e5);
    display: flex;
    align-items: center;
    padding: 13px;
    color: #666;
    span {
      flex: 1;
      margin-left: 10px;
    }
  }
}
</style>
