const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://127.0.0.1:8080',// 后端项目IP地址和端口
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            '/api': '/'
        },
        // cookieDomainRewrite: "http://localhost:3000"
    }))
}