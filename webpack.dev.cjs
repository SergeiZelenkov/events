const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",

  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
