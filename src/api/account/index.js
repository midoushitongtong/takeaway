import ajax from '../ajax';
import config from '../../config';

export default {
  sendPhoneCaptcha (phone) {
    return ajax(
      `${config.API_ROOT}/sendcode`,
      {
        phone
      },
      'GET'
    );
  },
  signInType1 (phone, code) {
    return ajax(
      `${config.API_ROOT}/login_sms`,
      {
        phone,
        code
      },
      'POST'
    );
  },
  signInType2 (username, password, captcha) {
    return ajax(
      `${config.API_ROOT}/login_pwd`,
      {
        name: username,
        pwd: password,
        captcha
      },
      'POST'
    );
  },
  getUserInfo () {
    return ajax(
      `${config.API_ROOT}/userinfo`,
      {},
      'GET'
    );
  },
  signOut () {
    return ajax(
      `${config.API_ROOT}/logout`,
      {},
      'GET'
    );
  }
};
