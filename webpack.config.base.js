const path = require('path')

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'app', 'index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'file-loader'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'app/')
        ],
        exclude: /(node_modules|dist)/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
