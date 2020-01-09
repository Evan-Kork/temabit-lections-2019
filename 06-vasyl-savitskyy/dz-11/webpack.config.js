const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: 'assets/'
};

module.exports = {
    devtool: 'source-map',
    entry: {
        main: `${PATHS.src}/main.js`
    },
    output: {
        // publicPath: './', // for local build
        publicPath: '/',
        path: PATHS.dist,
        filename: `${PATHS.assets}js/[name].[hash].js`
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `postcss.config.js` } }
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                ],
              }, {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `postcss.config.js` } }
                    }
                ],
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 8081
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[hash].css`
        }),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/static`, to: '' },
//             { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` }
        ])
    ]
}
