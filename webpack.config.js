const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: (getPath) => {
    return getPath('css/[name].css')
  },
});

module.exports = {
  entry: './assets/src/js/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'assets/dist'),
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
            publicPath: path.resolve(__dirname),
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

