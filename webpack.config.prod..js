/**
 * WEBPACK CONFIG FOR PRODUCTION USE
 */

const path = require('path');
const lodash = require('lodash');
const webpack = require('webpack');

const sourcePath = path.resolve(__dirname, 'src');
// const distPath = path.join(__dirname, 'dist');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const rules = [
  // Babel enables the use of ES6 today by transpiling your ES6 JavaScript into equivalent ES5
  // source that is actually delivered to the end user browser.
  {
    test: /\.jsx?$/,
    use:  {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    },
    // include: sourcePath
  },
];
module.exports = {
  optimization: {
    minimizer: [new UglifyJSPlugin()]
  },
  entry: [
    path.join(__dirname, './src/index.jsx')
  ],
  // If you pass an array - the modules are loaded on startup. The last one is exported.
  output: {
    path: path.resolve(__dirname, './src'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  mode: 'process.env.NODE_ENV',

  // Array of file extensions used to resolve modules.
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  // External dependencies don't need to be in our own dist
  externals: [
    'color',
    'radium',
    'react',
    /^react-icons\b/,
    'react-motion',
    'react-dimensions'
  ],
  module: {
    rules: rules
  }
};