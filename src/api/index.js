import ajax from './ajax';

// 1、根据经纬度获取位置详情
export const requestAddress = (geoHash) => {
  let url = `/position/${geoHash}`;
  return ajax(url, {}, 'GET');
};

// 2、获取食品分类列表
export const requestFoodTypes = () => {
  let url = `/index_category`;
  return ajax(url, {}, 'GET');
};

// 3、根据经纬度获取商铺列表
export const requestMerchantList = (longitude, latitude) => {
  let url = `/shops`;
  return ajax(url, { longitude, latitude }, 'GET');
};

// 4、根据经纬度和关键字搜索商铺列表
// 5、获取一次性验证码
// 6、用户名密码登陆
// 7、发送短信验证码
// 8、手机号验证码登陆
// 9、根据会话获取用户信息
// 10、用户登出
