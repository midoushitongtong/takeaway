import ajax from '../ajax';
import config from '../../config';

export default {
  getFoodCategoryList () {
    return ajax(
      `${config.API_ROOT}/common/foodCategory`,
      {},
      'GET'
    );
  }
};
