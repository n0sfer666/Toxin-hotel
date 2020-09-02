const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [];
const pages = [
  'index',
  'colors-and-types',
  'form-elements',
  'cards',
  'headers-and-footers',
  'landing-page',
  'registration-page',
  'sign-in-page',
  'search-room',
  'room-detail',
];

pages.forEach((page) => {
  plugins.push(
    new HtmlWebpackPlugin({
      filename: `${page}.html`,
      template: `./src/pages/${page}/${page}.pug`,
    }),
  );
});

plugins.push(
  new CopyWebpackPlugin([
    { from: 'src/favicons/', to: 'favicons' },
  ]),
  new Webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',

    noUiSlider: 'nouislider',
    wNumb: 'wnumb',
  }),
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
