const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')

const jsRegex = /\.js(x?)$/
const tsRegex = /\.ts(x?)$/

module.exports = {
    entry: [
        path.resolve(__dirname, './app.ts'),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    target: 'node',
    externals: [nodeExternals()],
    optimization: {
        minimizer: [
            new TerserPlugin()
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new NodemonPlugin({
            // What to watch.
            watch: path.resolve('./dist'),
            // Files to ignore.
            ignore: ['*.js.map'],
            // Detailed log.
            verbose: true,
            alias: {
                '@': path.join(__dirname, './')
            }
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        plugins: [new TsconfigPathsPlugin({
            configFile: "./tsconfig.json"
        })]
    },
    module: {
        rules: [
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
            }
        ]
    }
}