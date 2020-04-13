const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [];
const pages = [
  'test'
]

pages.forEach(element => {
  plugins.push(
    new HtmlWebpackPlugin({
      filename: `${element}.html`,
      template: `./src/pages/${element}/${element}.pug`,
      inject: false
    })
  )
})

plugins.push(
  // new MiniCssExtractPlugin({
  //   filename: 'main.css',
  //   chunkFilename: '[id].css'
  // }),
  new CopyWebpackPlugin([
    { from: 'src/favicons/', to: 'favicons' },
  ]),
  new Webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',

    noUiSlider: 'nouislider',
    wNumb: 'wnumb',
  })
);


module.exports = (env, options) => ({
  stats: 'errors-warnings',
  entry: './src/index.js',

  output: {
    filename: options.mode === 'development' ? '[name].js' : '[name].min.js',
    path: `${__dirname}/dist`,
  },

  plugins: plugins,

  devtool: options.mode === 'development' ? 'inline-source-map' : '',

  devServer: {
    // clientLogLevel: 'error',
    // stats: 'errors-only',
    contentBase: `${__dirname}/dist`,
    compress: true,
    port: 9090,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/styles/variables/**/*.scss',
                './src/styles/mixins/**/*.scss',
              ],
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      },
    ],
  },
});
