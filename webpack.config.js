module.exports = {
  entry: './dist/index.js',
  output: {
    filename: '../browser/sentry-mina.js',
    library: 'sentry',
    libraryTarget: 'umd'
  },
  mode: 'production'
};
