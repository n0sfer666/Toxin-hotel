const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entry = {};
const plugins = [];


plugins.push(
  new CopyWebpackPlugin([
    { from: 'src/favicons/', to: 'favicons'}
  ]),
  new Webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  }),
  new Webpack.ProvidePlugin({
    noUiSlider: 'nouislider'
  }),
  new Webpack.ProvidePlugin({
    wNumb: 'wnumb'
  })
)


module.exports = {
  // stats: 'errors-warnings',
  entry: './src/index.js',

  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },

  plugins: plugins,

  devtool: 'inline-source-map',

  devServer: {
    clientLogLevel: 'error',
    stats: 'errors-only',
    contentBase: __dirname + '/dist',
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
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/styles/variables/colors.scss',
                './src/styles/variables/breakpoints.scss',
                './src/styles/font-face/fonts.scss',
                './src/styles/reset/reset.scss',
              ]
            }
          }
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
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
            name: "img/background/[name].[ext]"
        }
      }
    ]
  }
}