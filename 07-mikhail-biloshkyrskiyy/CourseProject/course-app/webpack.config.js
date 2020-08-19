const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/
const jsRegex = /\.js(x?)$/
const tsRegex = /\.ts(x?)$/

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, './src/index.tsx'),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    devServer: {
        port: process.env.PORT || 3000,
        historyApiFallback: true,
        mimeTypes: {
            'text/html': ['phtml']
        },
        proxy: {
            '/api': 'http://localhost:5000'
        }
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({
                multiStep: true
            }),
            new TerserPlugin()
        ]
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@': path.join(__dirname, '..', 'src')
        },
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        plugins: [new TsconfigPathsPlugin({
            configFile: path.resolve(__dirname, "./tsconfig.json")
        })]
    },
    module: {
        rules: [
            // Css loader
            {
                test: cssRegex,
                exclude: cssModuleRegex,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                        }
                    },
                    'postcss-loader'
                ]
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
                                hashPrefix: 'my-hash',
                            },
                            sourceMap: true,
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader'

                ]
            },
            // Sass loader
            {
                test: sassRegex,
                exclude: sassModuleRegex,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
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
                                hashPrefix: 'my-hash',
                            },
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            // Js loader Babel
            {
                test: jsRegex,
                exclude: /node_modules/,
                use: ["babel-loader", "source-map-loader"]
            },
            // Ts loader Babel
            {
                test: tsRegex,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            // Images loader
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            }
        ]
    }
}