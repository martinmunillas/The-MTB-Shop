const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();

const isDev = process.env.ENV === 'developmnet';

module.exports = {
  entry: './src/frontend/index.js',
  mode: process.env.ENV,
  output: {
    path: path.resolve(__dirname, '/src/server/public/build'),
    filename: isDev ? 'assets/app.js' : 'assets/app-[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css',
    }),
  ],
};
