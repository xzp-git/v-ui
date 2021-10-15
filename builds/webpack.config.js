const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: path.resolve(__dirname, '../packages/v-ui/index.ts'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    libraryTarget: 'umd', // 支持commonjs和amd 不支持es6 可以在浏览器直接使用
    library: 'v-ui'
  },
  externals: { // 忽略组件中引用的vue变量
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue'
    }
  },
  resolve: { // 解析模块 对应的扩展名有哪些
    extensions: ['.ts', '.tsx', '.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
