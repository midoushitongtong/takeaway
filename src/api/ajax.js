import axios from 'axios';
import config from '../config';

// 设置请求的前缀
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = config.dev.API_ROOT;
} else {
  axios.defaults.baseURL = config.prod.API_ROOT;
}
axios.defaults.withCredentials = true;

/*
  ajax 请求封装模块
 */
export default function ajax (url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise;
    switch (type) {
      case 'GET':
        // 拼接 url query 参数
        let dataStr = '';
        Object.keys(data).forEach(key => {
          dataStr += key + '=' + data[key] + '&';
        });
        if (dataStr !== '') {
          dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
          url = url + '?' + dataStr;
        }
        // 发送 get
        promise = axios.get(url);
        break;
      case 'POST':
        promise = axios.post(url, data);
    }
    promise
      .then((response) => {
        // 成功
        resolve(response.data);
      })
      .catch((error) => {
        // 失败
        reject(error);
      });
  });
}