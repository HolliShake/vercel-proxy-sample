module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://cqi.ustp.edu.ph/dev/Api',
        changeOrigin: true,
        pathRewrite: { '^/api': '/api' },
        ws: false
      } 
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
