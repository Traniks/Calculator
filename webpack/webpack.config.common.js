const path = require('path')
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin')
// const CopyPlugin        = require("copy-webpack-plugin");

module.exports = {
	mode: 'development',
	output: {
		path: path.join(process.cwd(), 'dist/'),
		clean: true,
	},

	plugins: [
		new HtmlBundlerPlugin({
			entry: {
				index: './src/pages/index/index.html',
				// 'about/index': './src/pages/about/index.html',
				// 'hello/index': './src/pages/hello/index.html',
			},
			js: {
				filename: 'assets/js/[name].[contenthash:8].js',
			},
			css: {
				filename: 'assets/css/[name].[contenthash:8].css',
			},
		}),
		// new CopyPlugin({
		//   patterns: ['public'],
		// }),
	],

	module: {
		rules: [
			{
				test: /\.html$/,
				loader: HtmlBundlerPlugin.loader,
			},
			{
				test: /\.(css|sass|scss)$/,
				use: ['css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpe?g|svg|ico|webp)/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/img/[name].[hash:8][ext]',
				},
			},
			{
				test: /\.(woff2?|eot|ttf)/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name].[hash:8][ext]',
				},
			},
		],
	},

	devServer: {
		static: {
			directory: path.join(process.cwd(), 'dist'),
		},
		watchFiles: {
			paths: ['src/**/*.*'],
			options: {
				usePolling: true,
			},
		},
	},
}
