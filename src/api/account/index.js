import ajax from '../ajax';
import config from '../../config';

export default {
  sendPhoneCaptcha(phone) {
    return ajax(
      `${config.API_ROOT}/account/sendCode`,
      {
        phone
      },
      'GET'
    );
  },
  signInType1(phone, code) {
    return ajax(
      `${config.API_ROOT}/account/signUp/1`,
      {
        phone,
        code
      },
      'POST'
    );
  },
  signInType2(username, password, captcha) {
    return ajax(
      `${config.API_ROOT}/account/signUp/2`,
      {
        name: username,
        pwd: password,
        captcha
      },
      'POST'
    );
  },
  getUserInfo() {
    return ajax(
      `${config.API_ROOT}/account/userInfo`,
      {},
      'GET'
    );
  },
  signOut() {
    return ajax(
      `${config.API_ROOT}/account/logout`,
      {},
      'GET'
    );
  }
};
