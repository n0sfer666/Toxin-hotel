const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = [
	// ui-kit
	{
		name: "index",
		path: "src/pages/_index/"
	},
	{
		name: "colors-and-types",
		path: "src/pages/colors-and-types/"
	},
	{
		name: "form-elements",
		path: "src/pages/form-elements/"
	},
	{
		name: "cards",
		path: "src/pages/cards/"
	},
	{
		name: "headers-and-footers",
		path: "src/pages/headers-and-footers/"
	},
	// website
	{
		name: "landing-page",
		path: "src/pages/landing-page/"
	},
	{
		name: "registration",
		path: "src/pages/registration/"
	},
	{
		name: "sign-in",
		path: "src/pages/sign-in/"
	},
	{
		name: "search-room",
		path: "src/pages/search-room/"
	},
	{
		name: "room-detail",
		path: "src/pages/room-detail/"
	}
]
const entry = {};
const plugins = [];

pages.forEach( (page) => {
	entry[page.name] = './' + page.path + page.name + '.js';
	plugins.push(new HtmlWebpackPlugin({
		filename: page.name + '.html',
		template: page.path + page.name + '.pug',
		inject: false
	}))
})

plugins.push(
	new MiniCssExtractPlugin({
		filename: '[name].css',
		chunkFilename: '[id].css'
	}),
	new CopyWebpackPlugin([
		{ from: 'src/img', to: 'img' },
		{ from: 'src/favicons/', to: 'favicons'}
	]),
	new Webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		'window.jQuery': 'jquery'
	}),
	new Webpack.ProvidePlugin({
		noUiSlider: 'nouislider'
	}),
	new Webpack.ProvidePlugin({
		wNumb: 'wnumb'
	})
)


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
		stats: 'errors-only',
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
				use: [
					'style-loader', 
					MiniCssExtractPlugin.loader, 
					'css-loader', 
					'postcss-loader', 
					'sass-loader'
				]
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
				},
			},
			{
				test: /\.(png|jpeg|gif)$/,
				loader: 'file-loader',
				options: {
						name: "img/background/[name].[ext]"
				}
			}
		]
	}
}