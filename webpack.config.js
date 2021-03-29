//webpack.config.js
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist'),
  },
  mode:'development',
  devtool:'inline-source-map',
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
         test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
         loader: 'file-loader'
      },
      {
        test: /\.m?js$/,
	      exclude: [
          // \\ for Windows, \/ for Mac OS and Linux
          /node_modules[\\\/]core-js/,
          /node_modules[\\\/]webpack[\\\/]buildin/,
          /node_modules/,
        ],
	      loader:'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ["@babel/preset-env"],
          "plugins": [
          [
          "component",
          {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
          }
          ]
          ]
	      }
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
  ]
};
