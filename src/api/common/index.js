import ajax from '../ajax';

export default {
  getAddress (geoHash) {
    let url = `/position/${geoHash}`;
    return ajax(url, {}, 'GET');
  }
};
