import Moment from 'moment';
import Vue from 'vue';

Vue.filter('dateFormat', function (value, format = 'YYYY-MM-DD HH:mm:ss') {
  return Moment(value).format(format);
});
