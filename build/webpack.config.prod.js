const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const devConfig = require("./webpack.config.dev.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(devConfig, {
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "js/[name].[hash:8].js",
    umdNamedDefine: true,
    chunkFilename: "js/async_[name].[chunkhash:8].js"
  },
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: false
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../static"),
        to: "static",
        ignore: [".*"]
      }
    ])
  ]
});
