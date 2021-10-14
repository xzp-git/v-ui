const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const path = require('path')

module.exports = {
  mode:'development',
  devtool:'source-map',
  entry:path.resolve(__dirname,'main.ts'),
  output:{
    path:path.resolve(__dirname, '../website-dist'),
    filename:'bundle.js'
  },
  resolve:{ //解析模块 对应的扩展名有哪些
    extensions:['.ts', '.tsx', '.js', '.vue']
  },
  module:{
    rules:[
      {test:/\.(ts|js)x?$/, exclude:/node_modules/, use:'babel-loader'},
      {test:/\.vue$/, use:'vue-loader'},
      {test:/\.(svg|otf|ttf|woff|woff2|eot|git|png)$/,use:'url-loader'},
      {
        test:/\.(scss|css)/,
        use:[ 
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template.html')
    })
  ]
}
