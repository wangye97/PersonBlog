const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false ,//关闭eslint检查
  devServer: {
    // host: '0.0.0.0',
    // https:true,
    // port: 8080,
    // client: {
    //   webSocketURL: 'ws://0.0.0.0:8080/ws',
    // },
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // },
    proxy: {
      '/api': {  //这个是说明前缀  可以为任意值，需要与请求的前缀一样
        target: 'http://127.0.0.1:3008',
        //pathRewrite:{'^/api':''},  //重新路径名，将/api改为空
      },
    }
  },
})
