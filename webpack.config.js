const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('dotenv').config();

const isDev = process.env.ENV === 'development';

module.exports = {
  entry: './src/frontend/index.js',
  mode: process.env.ENV,
  output: {
    path: path.resolve(__dirname, './src/server/public/build'),
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
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},

    !isDev
      ? new CompressionWebpackPlugin({
          test: /\.js$|\.css$/,
          filename: '[path].gz',
        })
      : () => {},

    !isDev ? new ManifestPlugin() : () => {},

    !isDev
      ? new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: path.resolve(
            __dirname,
            'src/server/public/build/'
          ),
        })
      : () => {},

    new MiniCssExtractPlugin({
      filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  },
};
