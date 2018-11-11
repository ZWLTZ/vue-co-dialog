const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    path: __dirname + "/dist",
    filename: 'vue-co-dialog.js',
    library: 'VueCoog',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
      },
    ]
  },

  plugins: []
};