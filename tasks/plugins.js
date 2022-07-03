const path = require('path');
const webpack = require('webpack');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const _HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '[name].bundle.css',
  chunkFilename: '[id].css'
});

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../src/scss'),
  files: '**/*.scss',
  failOnError: false,
  quiet: false,
});

const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
  title: 'Wide Eye Technical Test 2022',
  template: 'src/index.hbs',
  filename: 'index.html',
  inject: false,
});

const jQueryPlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
});

module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  StyleLintPlugin: StyleLintPlugin,
  HtmlWebpackPlugin: HtmlWebpackPlugin,
  jQueryPlugin: jQueryPlugin,
};
