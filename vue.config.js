// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/mixins.scss";`
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    // 设置代理
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'http://127.0.0.1:4000/',
        // 如果要代理 websockets
        ws: true,
        // 将主机标头的原点更改为目标 URL
        changeOrigin: false,
        // 重写请求的 url
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
