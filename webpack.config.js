const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
    entry: {
        index: "./src/index.js",
        colorsTypes: "./src/colors-types.js"
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