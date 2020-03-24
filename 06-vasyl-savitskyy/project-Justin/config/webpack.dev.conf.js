const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    output: {
        publicPath: "/",
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        host: "localhost",
        port: 3001,
        watchContentBase: true,
        historyApiFallback: true,
        overlay: {
            errors: true,
            warnings: true,
        },
        /** якщо використовується проксі */
        proxy: {
            '/api': 'http://localhost:5000'
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});
