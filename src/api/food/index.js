import ajax from '../ajax';

export default {
  getFoodCategoryList () {
    let url = `/index_category`;
    return ajax(url, {}, 'GET');
  }
};
