const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const js = {
  rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader'
    }
  ]
}

const serverConfig = {
  entry: {
    server: './src/server.js',
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  target: 'node',
  externals: nodeExternals(),
  module: {
    rules: [js]
  }
}

const clientConfig = {
  mode: 'production',
  target: 'web',
  devtool: '',
  entry: {
    client: './src/client',
  },
  module: {
    rules: [js]
  },
  // optimization: {
  //   minimize: true,
  //   splitChunks: {
  //     cacheGroups: {
	// 			commons: {
	// 				test: /[\\/]node_modules[\\/]/,
	// 				name: 'vendor',
	// 				chunks: 'all'
	// 			}
	// 		}
  //   }
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
}

module.exports = [serverConfig, clientConfig];