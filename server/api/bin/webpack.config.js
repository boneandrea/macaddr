const path = require('path')
const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production'

const webpackConfig = {
  mode: isProd ? "production" : "development",
  entry: {
    app: [path.resolve(__dirname, 'www')]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  plugins: []
  // ...
}

if (isProd) {
  // ...
} else {
  // dev
  webpackConfig.entry.app.unshift('webpack-hot-middleware/client')
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = webpackConfig
