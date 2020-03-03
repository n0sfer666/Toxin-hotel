const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = [
	{
		name: "index",
		path: "src/pages/_index/"
	},
	{
		name: "colors-and-types",
		path: "src/pages/colors-and-types/"
	}
]
const entry = {};
const plugins = [];

plugins.push(
	new MiniCssExtractPlugin({
		filename: '[name].css',
		chunkFilename: '[id].css'
	}),
	new CopyWebpackPlugin([
		{ from: 'src/img', to: 'img' }
	]),
	new Webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		'windows.jQuery': 'jquery'
	}),
	new Webpack.ProvidePlugin({
		noUiSlider: 'nouislider'
	}),
	new Webpack.ProvidePlugin({
		wNumb: 'wnumb'
	})
)

pages.forEach( (page) => {
	entry[page.name] = './' + page.path + page.name + '.js';
	plugins.push(new HtmlWebpackPlugin({
		filename: page.name + '.html',
		template: page.path + page.name + '.pug',
		inject: false
	}))
})



module.exports = {
	entry: entry,

	output: {
		filename: '[name].js',
		path: __dirname + '/docs'
	},

	plugins: plugins,

	devtool: 'inline-source-map',

	devServer: {
		clientLogLevel: 'error',
		contentBase: __dirname + '/docs',
		compress: true,
		port: 9090 
	},
	
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']    
			},
			{
				test: /\.scss$/,
				use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
			},
			{
				test: /\.pug$/,
				use: ['pug-loader']
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)$/,
				loader: 'file-loader',
				options: {
						name: "fonts/[name].[ext]"
				}
			},
			// {
			// 	test: /\.(png|jpeg|gif)$/,
			// 	loader: 'file-loader',
			// 	options: {
			// 			name: "img/[name].[ext]"
			// 	}
			// }
		]
	}
}