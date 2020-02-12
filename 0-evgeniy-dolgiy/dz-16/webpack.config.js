const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",

  entry: resolve(__dirname, "src/index.js"),

  output: {
    path: resolve(__dirname, "dist"),
    filename: "[hash].final.js"
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "index.html"),
      title: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[hash].css"
    })
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "img"
            }
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: resolve(__dirname, "dist"),
    hot: true,
    port: 9000
  }
};
