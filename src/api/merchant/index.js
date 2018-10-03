import ajax from '../ajax';
import config from '../../config';

export default {
  getNearbyMerchantList ({ longitude, latitude }) {
    return ajax(
      `${config.API_ROOT}/common/nearbyMerchant`,
      {
        longitude,
        latitude
      },
      'GET'
    );
  },
  getMerchantList ({ keyword, geohash }) {
    return ajax(
      `${config.API_ROOT}/search/merchant`,
      {
        keyword,
        geohash
      },
      'GET'
    );
  },
  getMerchantInfo () {
    return ajax(
      `${config.API_ROOT}/merchant/info`,
      {},
      'GET'
    );
  },
  getMerchantFoodList () {
    return ajax(
      `${config.API_ROOT}/merchant/food`,
      {},
      'GET'
    );
  },
  getMerchantRatingList () {
    return ajax(
      `${config.API_ROOT}/merchant/rating`,
      {},
      'GET'
    );
  }
};
