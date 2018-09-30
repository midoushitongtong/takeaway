import ajax from '../ajax';

export default {
  sendPhoneCaptcha (phone) {
    let url = `/sendcode`;
    return ajax(url, { phone }, 'GET');
  },
  signInType1 (phone, code) {
    let url = `/login_sms`;
    return ajax(url, { phone, code }, 'POST');
  },
  signInType2 (username, password, captcha) {
    let url = `/login_pwd`;
    return ajax(url, { name: username, pwd: password, captcha }, 'POST');
  },
  getUserInfo () {
    let url = `/userinfo`;
    return ajax(url, {}, 'GET');
  },
  logout () {
    let url = `/logout`;
    return ajax(url, {}, 'GET');
  }
};
