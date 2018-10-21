<template>
  <section class="login-container">
    <div class="container">
      <header class="action">
        <a href="javascript:void(0)"
           :class="{active: signInType === 1}"
           @click="signInType = 1"
        >短信登陆</a>
        <a href="javascript:void(0)"
           :class="{active: signInType === 2}"
           @click="signInType = 2"
        >密码登陆</a>
      </header>
      <section class="form-container">
        <section
          :class="{active: signInType === 1}"
        >
          <div class="phone-captcha">
            <input type="text" placeholder="手机号"
                   v-model="phone"
            >
            <button type="button"
                    :disabled="!rightPhone"
                    :class="{'send-phone-captcha': true, 'right-phone': rightPhone}"
                    @click="sendPhoneCaptcha"
            >{{ sendPhoneCaptchaCountdown > 0 ? `已发送 (${sendPhoneCaptchaCountdown}s)` : '发送验证码' }}
            </button>
          </div>
          <div>
            <input type="text" placeholder="验证码 随便填6位数字"
                   v-model="phoneCaptcha">
          </div>
        </section>
        <section
          :class="{active: signInType === 2}"
        >
          <div>
            <input type="text" placeholder="手机号/邮箱/用户名"
                   v-model="username"
            >
          </div>
          <div>
            <input type="password" placeholder="密码"
                   v-model="password"
                   v-show="!showPassword"
            >
            <input type="text" placeholder="密码"
                   v-model="password"
                   v-show="showPassword"
            >
          </div>
        </section>
        <button type="button" class="sign-in"
                @click="signIn"
        >登陆
        </button>
      </section>
    </div>
    <AlertTooltip
      :alertText="alertText"
      v-show="showAlertTooltipFlag"
      @closeAlertTooltip="closeAlertTooltip"
    />
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import AlertTooltip from '../../components/common/AlertTooltip';
import api from '../../api';

export default {
  name: 'SignIn',
  components: {
    AlertTooltip
  },
  data() {
    return {
      // 1 代表短信登陆
      // 2 代表用户名密码登陆
      signInType: 2,
      sendPhoneCaptchaCountdown: 0,
      showPassword: false,

      phone: '13026628310',
      phoneCaptcha: '',
      username: 'aaa',
      password: '123',

      showAlertTooltipFlag: false,
      alertText: ''
    };
  },
  computed: {
    rightPhone() {
      return /^\d{11}$/.test(this.phone);
    }
  },
  methods: {
    ...mapActions('account', ['asyncInitUserInfo']),
    showAlertTooltip(alertText) {
      this.showAlertTooltipFlag = true;
      this.alertText = alertText;
    },
    closeAlertTooltip() {
      this.showAlertTooltipFlag = false;
      this.alertText = '';
    },
    async sendPhoneCaptcha() {
      if (this.sendPhoneCaptchaCountdown > 0) {
        return;
      }
      this.sendPhoneCaptchaCountdown = 30;
      this.interval01 = setInterval(() => {
        this.sendPhoneCaptchaCountdown--;
        if (this.sendPhoneCaptchaCountdown === 0) {
          clearInterval(this.interval01);
        }
      }, 1000);

      // 发送短信验证码
      const result = await api.account.sendPhoneCaptcha(this.phone);
      if (result.code === 0) {
        this.showAlertTooltip('发送成功');
      } else {
        this.showAlertTooltip('发送失败');
        clearInterval(this.interval01);
      }
    },
    async signIn() {
      let result;

      switch (this.signInType) {
        // 1 代表短信登陆
        case 1:
          const { phone, phoneCaptcha, rightPhone } = this;
          if (!rightPhone) {
            // 手机号不正确
            this.showAlertTooltip('手机号不正确');
            return;
          } else if (!/^\d{6}$/.test(phoneCaptcha)) {
            // 验证码不正确
            this.showAlertTooltip('验证码必须为六位');
            return;
          }

          // 登陆
          result = await api.account.signInType1(phone, phoneCaptcha);

          break;
        // 2 代表用户名密码登陆
        case 2:
          const { username, password } = this;
          if (!username) {
            this.showAlertTooltip('用户名不能为空');
            return;
          } else if (!password) {
            this.showAlertTooltip('密码不能为空');
            return;
          }

          // 登陆
          result = await api.account.signInType2(username, password);

          break;
      }

      // 清理定时任务
      if (this.sendPhoneCaptchaCountdown) {
        this.sendPhoneCaptchaCountdown = 0;
        clearInterval(this.interval01);
      }

      // 处理登陆结果
      if (result.code === 0) {
        // 保存用户登陆状态
        await this.asyncInitUserInfo();
        // 跳转个人中心
        this.$router.replace('/profile');
      } else {
        this.showAlertTooltip(result.msg);
      }
    }
  }
};
</script>

<style lang="scss">
.login-container {
  height: 100vh;
  background-color: #fff;
  .container {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .action {
    padding: 5vh 20px;
    text-align: center;
    a {
      font-size: 20px;
      color: #333;
    }
    a:first-child {
      margin-right: 20px;
    }
    a.active {
      padding-bottom: 5px;
      border-bottom: 3px solid #06f;
      color: #06f;
    }
  }
  .form-container {
    section {
      display: none;
    }
    section.active {
      display: block;
      div {
        position: relative;
        margin-bottom: 15px;
        input {
          width: 100%;
          padding: 13px 6px;
          border: 1px solid #e5e5e5;
          box-sizing: border-box;
        }
        .send-phone-captcha {
          position: absolute;
          top: 50%;
          right: 5px;
          border: 0;
          transform: translateY(-50%);
          background-color: #fff;
          color: #e1e1e1;
          outline: none;
        }
        .right-phone {
          color: #333;
        }
      }
      .image-captcha img {
        position: absolute;
        right: 0;
        bottom: 0;
        cursor: pointer;
        outline: none;
      }
    }
    .sign-in {
      width: 100%;
      padding: 15px 5px;
      border: 1px solid #06f;
      background-color: #06f;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
