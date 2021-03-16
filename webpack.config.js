//webpack.config.js
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode:'development',
  module: {
    rules: [
      {
        //*.vue
	test: /\.vue$/,
	loader:'vue-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'vue-style-loader','css-loader'],
      },
      {
        test: /\.m?js$/,
	exclude: [
          // \\ for Windows, \/ for Mac OS and Linux
          /node_modules[\\\/]core-js/,
          /node_modules[\\\/]webpack[\\\/]buildin/,
        ],
	loader:'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ["@babel/preset-env"]
	}
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
  ]
};
