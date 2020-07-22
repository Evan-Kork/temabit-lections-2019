const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = env => {

    return {
//---------------------------------------------------------------------
        mode: env.production ? "production" : "development",
//---------------------------------------------------------------------
        entry: resolve(__dirname, "src/index.tsx"),
//---------------------------------------------------------------------
        devtool: 'inline-source-map',
//---------------------------------------------------------------------
        output: {
            path: resolve(__dirname, "dist"),
            filename: "[hash].final.js"
        },
//---------------------------------------------------------------------
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ],
        },
//---------------------------------------------------------------------
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()]
        },
//---------------------------------------------------------------------
        plugins: [
            new HtmlWebpackPlugin({
              template: resolve(__dirname, "index.html"),
              title: "index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[hash].css"
            })
        ],
//---------------------------------------------------------------------
        module: {
            rules: [

                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },

                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },

                {
                    test: /\.s?[ac]ss$/i,
                    use: [
                        
                        {// Creates `style` nodes from JS strings
                            loader: MiniCssExtractPlugin.loader
                        },

                        {// Translates CSS into CommonJS
                            loader: 'css-loader'
                        },
                        
                        {// Compiles Sass to CSS
                            loader: 'sass-loader'
                        }
                    ]
                },

                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        'file-loader'
                    ]
                },

                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                }
            ]
        },
//---------------------------------------------------------------------
        devServer: {
            port: 9000,
            proxy: { // http://localhost/api/{par1}/{par2} -> http://openapi.justin.ua/{par1}/{par2}
                "/api": {
                    target: "http://openapi.justin.ua",
                    pathRewrite: {'^/api': ''},
                    changeOrigin: true
                }
            }
        }
//---------------------------------------------------------------------
    }
};
