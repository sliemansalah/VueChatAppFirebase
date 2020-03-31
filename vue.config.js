const webpack = require("webpack");

module.exports = {
  runtimeCompiler: true,
  outputDir: 'public',
  publicPath: 'public',
  lintOnSave: false,
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  },
  pages: {
    admin: {
      entry: 'resources/js/admin/app.js',
      template: 'resources/views/admin/index.html',
      filename: 'admin.html',
    }
  }
}
