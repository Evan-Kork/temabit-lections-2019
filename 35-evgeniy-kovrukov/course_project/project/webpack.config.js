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
			title: "title"
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
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader"
				]
			}
		]
	},

	// devServer: {
	// 	contentBase: resolve(__dirname, "dist"),
	// 	hot: true,
	// 	port: process.env.PORT || 3000,
	// 	historyApiFallback: true,
	// 	mimeTypes: {
	// 		"text/html": ["phtml"]
	// 	},
	// 	proxy: {
	// 		"/api": "http://localhost:5000"
	// 	}
	// }
	// devServer: {
	// 	contentBase: resolve(__dirname, "dist"),
	// 	hot: true,
	// 	port: 9000,
	// 	allowedHosts: ["openapi.jusin.ua"],
	// 	historyApiFallback: true,
	// 	watchOptions: { aggregateTimeout: 300, poll: 1000 },
	// 	headers: {
	// 		"Access-Control-Allow-Origin": "*",
	// 		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
	// 		"Access-Control-Allow-Headers":
	// 			"X-Requested-With, content-type, Authorization"
	// 	},
	// 	proxy: {
	// 		"/api": "http://localhost:9000"
	// 	}
	// }

	devServer: {
		contentBase: resolve(__dirname, "dist"),
		hot: true,
		port: process.env.PORT || 9000,
		proxy: {
			"/api": "http://localhost:3000"
		}
	}
};
