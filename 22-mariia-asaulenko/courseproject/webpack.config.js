const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",

  entry: resolve(__dirname, "src/index.tsx"),
  devtool: 'inline-source-map',
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
      title: "title"
    }),
    new MiniCssExtractPlugin({
      filename: "[hash].css"
    }),
    new Dotenv()
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
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  devServer: {
    contentBase: resolve(__dirname, "dist"),
    hot: true,
    port: 9001,
  },
  // externals: {
    // "react": "React",
    // "react-dom": "ReactDOM"
  // },
  resolve: {
    extensions: [".jsx", ".js", ".json", ".ts", ".tsx"]
},

};
