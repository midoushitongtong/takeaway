<template>
  <section class="login-container">
    <div class="container">
      <header class="action">
        <a href="javascript:void(0)" class="active">短信登陆</a>
        <a href="javascript:void(0)">密码登陆</a>
      </header>
      <section class="form-container">
        <section class="active">
          <div class="phone-captcha">
            <input type="text" placeholder="手机号">
            <button class="send-phone-captcha">获取验证码</button>
          </div>
          <div>
            <input type="text" placeholder="验证码">
          </div>
        </section>
        <section>
          <div>
            <input type="text" placeholder="手机号">
          </div>
          <div>
            <input type="text" placeholder="密码">
          </div>
          <div class="image-captcha">
            <input type="text" placeholder="验证码">
            <img src="../../assets/img/account/captcha.svg" alt="">
          </div>
        </section>
        <button class="sign-in">登陆</button>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SignIn',
  mounted () {
    console.log(this.$route.params);
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
          color: #999;
          outline: none;
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
