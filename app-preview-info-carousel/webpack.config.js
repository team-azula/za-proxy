const path = require('path');
const SRC_DIR = path.join(__dirname, './client/src');
// const BUILD_DIR = path.resolve(__dirname, './public/build');
var DIST_DIR = path.join(__dirname, './client/dist');

module.exports = {
  devtool: 'source-map',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }
    ]
  }
};
