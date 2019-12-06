# takeaway
### 运行
- 开启服务端
```shell
node /src/mock/json-server.js
```
- 开启客户端
```shell
npm run serve
```

### 项目开发准备
- 项目描述
  - 外卖练习项目
- 主要的功能
  - 登陆注册/搜索/食品分类/附件商家/商家食物列表/商家的评论/商家信息
- 技术栈
  - Vue 全家桶
- 开发的模式
  - spa 应用
  - 采用模块化(ES6 babel)/工程化(webpack, eslint, scss)开发
- API 接口
  - json-server 模拟

### 目录结构
- src
  + assets `通用资源文件[css, js, img]`
  + component `非路由的组件`
  + pages `路由的组件`
  + router `路由的模块`
  + store `vuex的模块`
  + api `与后台交互的模块`
  + filters `过滤器的模块`
  + mock `模拟数据接口`
  + App.vue `根组件`
  + main.js `入口文件`

### 知识点
- 按需加载
  npm install babel-plugin-component -D

- 动态的添加数据
  Vue.set(obj, 'k', 'v');

- 路由懒加载
  https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
  
