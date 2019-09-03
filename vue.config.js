// vue.config.js
module.exports = {
    configureWebpack: {
        // 开发环境配置
        /* 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，
        你需要在开发环境下将 API 请求代理到 API 服务器。
        这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。 */
      devServer:{
          proxy:{
            '/musichall':{
                target:'https://c.y.qq.com',
                changeOrigin:true
            },
              '/splcloud':{
                  target:'https://c.y.qq.com',
                  changeOrigin:true,
                  headers:{//绕过  referer 的限制
                    referer:'https://c.y.qq.com/',
                    host:'c.y.qq.com'
                  }
              }
          
      }
    }
  }
}