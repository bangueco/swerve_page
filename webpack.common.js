const path = require('path');

module.exports = {
  entry: {
    index: './src/assets/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  }
}