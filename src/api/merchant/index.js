import ajax from '../ajax';
import config from '../../config';

export default {
  getNearbyMerchantList ({ longitude, latitude }) {
    return ajax(
      `${config.API_ROOT}/shops`,
      {
        longitude,
        latitude
      },
      'GET'
    );
  },
  getMerchantList ({ keyword, geoHash }) {
    return ajax(
      `${config.API_ROOT}/search_shops`,
      {
        keyword,
        geoHash
      },
      'GET'
    );
  },
  getMerchantInfo () {
    return ajax(
      `http://localhost:3000/merchantInfo`,
      {},
      'GET'
    );
  },
  getMerchantFoodList () {
    return ajax(
      `http://localhost:3000/merchantFoodList`,
      {},
      'GET'
    );
  },
  getMerchantRatingList () {
    return ajax(
      `http://localhost:3000/merchantRatingList`,
      {},
      'GET'
    );
  }
};
