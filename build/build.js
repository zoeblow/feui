const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: "../docs/src/main.js",
  output: {
    path: "../dist",
    publicPath: "/",
    filename: "dist-docs.js"
  },
  resolve: {
    root: path.resolve("./")
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.js$/,
        exclude: /node_modules|vue-router\/|vue-loader\//,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "postcss-loader"]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./docs/src/index.html",
      inject: true
    }),
    new ExtractTextPlugin({
      filename: isProduction ? "[name].[hash:8].css" : "[name].css",
      allChunks: true
    })
  ],
  devtool: "source-map"
};

if (process.env.NODE_ENV === "production") {
  delete module.exports.devtool;
  module.exports.plugins = [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
}
