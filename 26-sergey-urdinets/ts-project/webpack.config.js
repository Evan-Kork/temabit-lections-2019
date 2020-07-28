const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',

  entry: resolve(__dirname, 'src/index.tsx'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
},
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html'),
      title: 'index.html'
    })
  ],



  module: {
    rules: [
      {
        test: /\.tsx?$/,    
        exclude: /node_modules/,    
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(css|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img'
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [require('autoprefixer')];
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    hot: true,
    port: 9000
  }
};
