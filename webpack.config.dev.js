var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var nib = require('nib');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpackConfig = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8081', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      './app/index.jsx'
    ],
    vendor: './app/vendors.js'
  },
  devServer: {
    // Uncomment this if you need to redirect traffic going to /api/* to a different
    // port, webpack dev server supports reverse proxy under the hood.
    // proxy: {
    //   "/api/*": "http://localhost:8001"
    // },
    contentBase: './build/dev_build'
  },
  output: {
    path: './build/dev_build',
    filename: 'app.bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      // IMPORTANT: we don't want to process EVERY single JS file with babel
      // loader. We only want to process the files inside our app structure
      // otherwise this could get very slow or even fail.
      {test: /\.jsx?$/, include: /app/, loaders: ['react-hot', 'babel-loader?optional=runtime']},
      {test: /\.json$/,     loader: 'json-loader'},
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      {test: /\.styl$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")},
      {test: /\.png/, loader: 'url?limit=100000&minetype=image/png'},
      {test: /\.jpg/, loader: 'file'},
      {test: /\.gif/, loader: 'file'},
      {test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
    ]
  },
  resolve: {
    // Needed so you can require('a') instead of require('a.jsx')
    extensions: ['', '.js', '.jsx', '.json', '.styl'],
    // Let us do things like require('app/stores/Channel')
    root: __dirname
  },
  stylus: {
    use: [nib()]
  },
  plugins: [
    new ExtractTextPlugin("app.bundle.css", {allChunks: true}),
    new WebpackNotifierPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
};


module.exports = webpackConfig;
