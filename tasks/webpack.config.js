const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  devtool: 'inline-source-map',
  module: {
    rules: [
      loaders.IMGLoader,
      loaders.CSSLoader,
      loaders.JSLoader,
      loaders.HBSLoader,
      loaders.ESLintLoader,
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../build'),
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.StyleLintPlugin,
    plugins.HtmlWebpackPlugin,
    plugins.jQueryPlugin,
  ],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].bundle.js'
  },
};
