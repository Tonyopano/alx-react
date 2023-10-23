const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './js/dashboard_main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};
