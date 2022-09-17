const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    // publicPath: "/dist/",
    path: path.resolve(__dirname, "dist/"),
  },
  devServer: {
    hot: true,
    port: "4000",
    // static: {
    //   directory: path.join(__dirname, "public/")
    // }
  },
  // 原始源代码，有助于调试
  devtool: "eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {
      "@": "/src",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.tsx|ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
          "ts-loader",
        ],
      },
      // 处理图片文件
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
      // 处理 svg 文件
      {
        test: /\.svg$/,
        loader: "@svgr/webpack",
      },
    ],
  },
};
