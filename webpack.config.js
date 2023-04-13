const webpack = require("webpack");
let webpackConfig = {
	entry: "./test/index.js",
	output:{
		filename:"index.js",
		publicPath:"/"
	},
	mode:"development",
	devtool: "cheap-module-eval-source-map" ,
	devServer: {
		port: 7979,
		open: true,
		host: "0.0.0.0",
		openPage: "./test.html",
		hot: true,
		publicPath:"/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env"], "@babel/preset-react"],
						plugins: [
							[
								"@babel/plugin-proposal-decorators",
								{ legacy: true }
							],
							[
								"@babel/plugin-proposal-class-properties",
								{ loose: true }
                            ],
                            [
								"import",
								{
									libraryName: "antd",
									libraryDirectory: "es",
									style: true
								}
							],
							[
								"import",
								{
									"libraryName": "tntd",
									"libraryDirectory": "es",
								},
								"tntd"
							],
							"@babel/plugin-transform-runtime",
						]
					}
				}]
			},
			{
				test: /\.less$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								javascriptEnabled: true,
								modules: true,
								localIndexName: '[name]__[local]___[chunkhash:base64:5]',
								modifyVars: {
									// hack: 'true; @import "~@tntd/antd-cover/tnt.less";'
									hack: 'true; @import "~tntd/themes/default/variables.less";'
								}
							}
						}
					},
					{
						loader: 'babel-loader',
						options: {
						  presets: ['@babel/preset-env']
						}
					  }
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader'
					}
				]
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			React: "react"
		}),
	]
};
module.exports = webpackConfig;
