module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/dev': {
        target: 'http://liangck.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/dev': ''
        }
      }
    }
  }
}
