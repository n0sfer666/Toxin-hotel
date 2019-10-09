const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
    entry: {
        index: "./src/index.js",
        colorsTypes: "./src/colors-types.js",
        elements: "./src/elements.js",
        cards: "./src/cards.js",
        headersFooters: "./src/headers-footers.js",
        landingPage: "./src/landing-page.js",
        registration: "./src/registration.js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.pug',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'colors-types.html',
            template: 'src/colors-types.pug',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'elements.html',
            template: 'src/elements.pug',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'cards.html',
            template: 'src/cards.pug',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'headers-footers.html',
            template: 'src/headers-footers.pug',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'landing-page.html',
            template: 'src/landing-page.pug',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'registration.html',
            template: 'src/registration.pug',
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