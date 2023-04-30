const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false ,//关闭eslint检查
  publicPath:'./',
  outputDir:'dist',
  assetsDir:'static',
  devServer: {
      host:'0.0.0.0',
      // proxy:'http://120.26.8.174:8889',

  //   host: '0.0.0.0',
  //   https:true,
  //   port: 8080,
  //   client: {
  //     webSocketURL: 'ws://0.0.0.0:8080/ws',
  //   },
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //   },
    // proxy: {
    //   '/api': {  //这个是说明前缀  可以为任意值，需要与请求的前缀一样
    //     target: 'http://127.0.0.1:8889',
    //     //pathRewrite:{'^/api':''},  //重新路径名，将/api改为空
    //   },
    // }
  },
  chainWebpack: config => {
    config.plugin('html')
        .tap(args => {
            args[0].title = 'Person_blog';
            return args;
  })
  },
})
