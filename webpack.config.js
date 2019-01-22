const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const package = require('./package');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const args = process.argv;
const isFileCSS = args.includes('--styles');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const images = ['jpeg', 'png', 'svg', 'gif'];

const plugins = [
  new HtmlPlugin({
    title: package.name,
    version: package.version,
    filename: 'index.html',
    chunksSortMode: 'none',
    template: './index.html'
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.ProvidePlugin({
    React: 'react',
    Component: ['react', 'Component']
  }),
  new CopyWebpackPlugin(
    images.map(ext => ({
      from: `**/*/*.${ext}`,
      to: 'images/[name].[ext]'
    }))
  )
];

if (isFileCSS) {
  plugins.push(new MiniCssExtractPlugin({
    filename: 'styles-' + Date.now() + '.css'
  }));
}

module.exports = {
  entry: {
    main: './app.js'
  },
  output: {
    filename: 'bundle-[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'vendors.js',
    publicPath: '/',
  },
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  resolve: {
    alias: {
      'services': path.resolve(__dirname, './src/services' ),
      'components': path.resolve(__dirname, './src/components' )
    }
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [ isFileCSS ? MiniCssExtractPlugin.loader : 'style-loader',
          {loader: "css-loader", options: {
              sourceMap: true
            }},
          {loader: "sass-loader", options: {
              sourceMap: true
            }}
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
            ]
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      /*{
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          },
        ],
      },*/
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      }
    ]
  },

  plugins,

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },

  devtool: 'inline-source-map'
};
