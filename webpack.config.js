/* eslint-disable no-undef */
const path = require('path');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '../dist/sentry-mina.js',
    library: 'sentry',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new ReplaceInFileWebpackPlugin([{
      dir: 'dist',
      files: ['sentry-mina.js'],
      rules: [{
        search: 'try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}',
        replace: ''
      }]
    }])
  ]
};
