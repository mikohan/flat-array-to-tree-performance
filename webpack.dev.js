const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');

module.exports = merge(baseWebpackConfig, {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	//devtool: 'source-map',
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: '[file][hash:20].map',
		}),
	],
	devServer: {
		contentBase: [baseWebpackConfig.externals.paths.dist],
		watchContentBase: true,
		overlay: true,
		port: 9000,
		inline: true,
		//hot: true,
		after: function(app, server, comiler) {
			console.log(`Server running on host localhost:9000`);
		},
	},
});
