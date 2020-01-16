const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const ROOT_DIR = path.join(__dirname, '../');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const BUILD_DIR = path.join(ROOT_DIR, 'dist');
const STATIC_OUT_DIR = 'static';

/**
 * Common configuration for all environments
 */
const config = {
  target: 'web',
  entry: path.join(SRC_DIR, 'index.js'),
  context: ROOT_DIR,
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: `${STATIC_OUT_DIR}/js/[name].bundle.js`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      SRC_DIR,
      path.join(ROOT_DIR, 'node_modules'),
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: path.join(ROOT_DIR, 'node_modules/'),
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(ROOT_DIR, 'node_modules/'),
        loader: 'babel-loader',
        options: {
          sourceMaps: true,
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT_DIR, 'public/index.html'),
      favicon: 'public/favicon.ico',
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
    new StyleLintPlugin({}),
  ],
};

module.exports = {
  config,
  env: {
    ROOT_DIR,
    SRC_DIR,
    BUILD_DIR,
    STATIC_OUT_DIR,
  },
};
