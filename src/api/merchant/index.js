import ajax from '../ajax';

export default {
  getMerchantList (longitude, latitude) {
    let url = `/shops`;
    return ajax(url, { longitude, latitude }, 'GET');
  }
};
