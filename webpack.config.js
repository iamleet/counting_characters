var path    = require('path');
var webpack = require('webpack');
var isWeb = process.env.BROWSER == 'true' ? true : false;

var output = {
  path: path.join(__dirname, "dist"),
  filename: 'optanon.js'
};

if (!isWeb) {
  output.libraryTarget = "commonjs2";
}

module.exports = {
  mode: 'production',
  target: 'web',
  entry: [
    './src/index.js'
  ],
  output: output,
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    /*new webpack.ProvidePlugin({ Promise: 'es6-promise-promise' }),*/
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', include: path.join(__dirname, 'src'), exclude: '/node_modules/' }
    ]
  },
  node: {
    fs: "empty"
  }
};
