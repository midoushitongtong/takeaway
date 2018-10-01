import ajax from '../ajax';
import config from '../../config';

export default {
  getFoodCategoryList () {
    return ajax(
      `${config.API_ROOT}/index_category`,
      {},
      'GET'
    );
  }
};
