const path = require('path');
const package = require('./package');

module.exports = {
  entry: {
    main: './app.js'
  },
  output: {
    filename: 'bundle-[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'vendors.js'
  },
  context: path.resolve(__dirname, 'src'),
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader',
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  devtool: 'inline-source-map'

};