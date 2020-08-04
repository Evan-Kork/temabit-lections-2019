const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: "production",
    output: {
        publicPath: "./",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackBundleAnalyzer()
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
});
