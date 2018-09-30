import ajax from '../ajax';

export default {
  getNearbyMerchantList (longitude, latitude) {
    let url = `/shops`;
    return ajax(url, { longitude, latitude }, 'GET');
  },
  getMerchantList (keyword, geoHash) {
    let url = `/search_shops`;
    return ajax(url, { keyword, geoHash }, 'GET');
  }
};
