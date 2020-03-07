/**
 * WEBPACK CONFIG TO RUN DEMOS
 *
 * 'react-hot'
 * React Hot Loader is a plugin for Webpack that allows instantaneous live refresh without losing
 * state while editing React components.
 */
const lodash = require('lodash');
const path = require('path');
const webpack = require('webpack');

// array of all the requisite loaders
const rules = [
  // babel loader to transpile es6/7 with jsx -> es5
  {
    test: /\.jsx?$/,
    // include: [ path.join(process.cwd(), '/'), path.join(process.cwd(), 'src') ],
    use: [ 'babel-loader' ]
  },
    // ability to load css files into js files
  {
    test: /(\.css)$/,
    use: [ 'style-loader', 'css-loader' ]
  },

  /* BOOTSTRAP CONFIGURATION */
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    use: ['file-loader']
  },
  {
    test: /\.(woff|woff2)$/,
    //'url?prefix=font/&limit=5000'
    use: [{'loader': 'url-loader', 'options': {'prefix': 'font', 'limit': 5000} }]
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    // loader: 'url?limit=10000&mimetype=application/octet-stream'
    use: [{'loader': 'url-loader', 'options': {'limit': 10000, 'mimetype': 'application/octet-stream'}}]
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    // loader: 'url?limit=10000&mimetype=image/svg+xml'
    use: [{'loader': 'url-loader', 'options': {'limit': 10000, 'mimetype': 'image/svg+xml'}}]
  },
  {
    test: /\.html$/,
    use: ['html-loader']
  }
];

// setting up variables
// setting up the entry point to the demos
// entry = Object.keys(entry).reduce(function (result, key) {
//   result[key] = [
//     'webpack-dev-server/client?http://localhost:5001',
//     'webpack/hot/only-dev-server',
//     entry[key]
//   ];
//   return result;
// }, {});

module.exports = {
  // context: path.resolve(__dirname, 'src'),
  entry: path.join(__dirname, './index.js'), //build the dependency
   // If you pass an array - the modules are loaded on startup. The last one is exported.
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'src')
  },
  mode: 'process.env.NODE_ENV',
  // Array of file extensions used to resolve modules.
  resolve: {
    extensions: [ '.js', '.jsx' ],
    modules: ['node_modules'],
  },
  optimization: {
    minimize: true, 
  },
  // http://www.cnblogs.com/Answer1215/p/4312265.html
  // The source map file will only be downloaded if you have source maps enabled and your dev tools
  // open.
  // devtool: 'inline-source-map',
  plugins: [
    // Hot Module Replacement (HMR) exchanges, adds or removes modules while an application is
    // running without page reload.
    new webpack.HotModuleReplacementPlugin(),
    // Hot loader is better when used with NoErrorsPlugin and hot/only-dev-server since it eliminates
    // page reloads altogether and recovers after syntax errors.
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: rules
  }
};