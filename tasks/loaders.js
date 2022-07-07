const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      env: {
        production: {
          presets: ['minify']
        }
      }
    }
  }
};
module.exports = {
  JSLoader: JSLoader
};

const HBSLoader = {
  test: /\.hbs$/,
  exclude: /node_modules/,
  use: {
    loader: 'handlebars-loader',
    options: {
      minify: false,
      helperDirs: [ path.resolve(__dirname, '../src/js/helpers') ],
      inlineRequires: 'img/',
    },
  }
};
module.exports = {
  HBSLoader: HBSLoader
};

const IMGLoader = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  use: {
    loader: 'file-loader',
    options: {
      esModule: false,
      name: '[name].[ext]',
      outputPath: 'images/',
      publicPath: 'images/'
    },
  }
};
module.exports = {
  IMGLoader: IMGLoader
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: __dirname + '/.eslintrc'
    },
  }
};

const CSSLoader = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: __dirname + '/../../../build/css/'
      }
    }, {
      loader: 'css-loader',
      options: {
        sourceMap: false
      }
    }, {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/postcss.config.js'
        }
      }
    }, {
        loader: 'sass-loader',
        options: {
          sourceMap: false,
          implementation: require('sass')
        }
    }
  ],
};

module.exports = {
  JSLoader: JSLoader,
  HBSLoader: HBSLoader,
  ESLintLoader: ESLintLoader,
  CSSLoader: CSSLoader,
  IMGLoader: IMGLoader,
};
