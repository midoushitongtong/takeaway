import ajax from '../ajax';
import config from '../../config';

export default {
  getAddress ({ geoHash }) {
    return ajax(
      `${config.API_ROOT}/position/${geoHash}`,
      {},
      'GET'
    );
  }
};
