const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const jsRegex = /\.(js|ts)$/

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.resolve('src/index.js'),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    devServer: {
        port: process.env.PORT || 3000,
        historyApiFallback: true,
        mimeTypes: { 'text/html': ['phtml'] }
    },
    optimization: {
        minimizer: [
            // Compress and optimize (css, sass) files
            new OptimizeCssAssetsPlugin({
                multiStep: true
            }),
            // Compress and optimize js files
            new UglifyJsPlugin({})
        ]
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CleanWebpackPlugin(),
    ],
    // Extension is automatically added
    resolve: {
        extensions: ['.js', '.ts'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
        rules: [
            // Css loader
            {
                test: cssRegex,
                exclude: cssModuleRegex,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            // Css Module loader
            {
                test: cssModuleRegex,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]--[hash:base64:5]',
                                context: path.resolve(__dirname, 'src'),
                                hashPrefix: 'my-ringoo-hash',
                            },
                        },
                    },
                ],
            },
            // Sass loader
            {
                test: sassRegex,
                // not including
                exclude: sassModuleRegex,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            // Sass Module loader 
            {
                test: sassModuleRegex,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]--[hash:base64:5]',
                                context: path.resolve(__dirname, 'src'),
                                hashPrefix: 'my-ringoo-hash',
                            },
                            importLoaders: 1,
                        },
                    },
                    'sass-loader',
                ],
            },
            // Js loader Babel
            {
                test: jsRegex,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    }
}