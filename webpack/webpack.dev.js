const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge.smart(
  common.config,
  {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      host: '0.0.0.0',
      port: 3000,
    },
  },
);
