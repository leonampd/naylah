const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: '[name].css',
});

module.exports = {
  entry: './assets/src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/dist/js'),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, 'assets/src/sass')],
          },
        }],
        fallback: 'style-loader',
      }),
    }],
  },
  plugins: [
    extractSass,
  ],
}

