const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		index: "./src/pages/index/index.js",
		colorsTypes: "./src/pages/colors-types/colors-types.js",
		elements: "./src/pages/elements/elements.js",
		cards: "./src/pages/cards/cards.js",
		headersFooters: "./src/pages/headers-footers/headers-footers.js",
		landingPage: "./src/pages/landing-page/landing-page.js",
		registration: "./src/pages/registration/registration.js",
		signin: "./src/pages/sign-in/sign-in.js",
		roomDetail: "./src/pages/room-detail/room-detail.js",
		searchRoom: "./src/pages/search-room/search-room.js"
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/docs'
	}   ,
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new CopyWebpackPlugin([
			{from:'src/_components/_cards/_apart/img', to:'img'} 
		]),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/pages/index/index.pug',
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: 'colors-types.html',
			template: 'src/pages/colors-types/colors-types.pug',
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: 'elements.html',
			template: 'src/pages/elements/elements.pug',
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: 'cards.html',
			template: 'src/pages/cards/cards.pug',
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: 'headers-footers.html',
			template: 'src/pages/headers-footers/headers-footers.pug',
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: 'landing-page.html',
			template: 'src/pages/landing-page/landing-page.pug',
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: 'registration.html',
			template: 'src/pages/registration/registration.pug',
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: 'sign-in.html',
			template: 'src/pages/sign-in/sign-in.pug',
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: 'room-detail.html',
			template: 'src/pages/room-detail/room-detail.pug',
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: 'search-room.html',
			template: 'src/pages/search-room/search-room.pug',
			inject: false
		}),
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
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']    
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
			{
				test: /\.(png|jpeg|gif)$/,
				loader: 'file-loader',
				options: {
						name: "img/[name].[ext]"
				}
			}
		]
	}
}