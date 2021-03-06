const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const LibraryPlugin = require(path.resolve('.', 'dist/webpack-resolve-library-plugin.js'))

module.exports = LibraryPlugin({
  entry: path.resolve(__dirname, './foo.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      { test: /\.css$/, use: [
	      'style-loader',
	      'css-loader'
      ] },
      { test: /\.(jpg|png|gif|ttf|eot|woff|woff2)$/, use: 'url-loader' }
    ]
  },
  library: {
    base: __dirname
  },
  plugins: [    
    new HTMLWebpackPlugin()
  ],
  watchOptions: {
    ignored: [/\.#/, /node_modules/],
  }
})
