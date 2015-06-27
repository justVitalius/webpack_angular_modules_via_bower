var path = require("path");
var webpack = require("webpack");
var BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: './app.js',

  output: {
    filename: 'app.js',
    path: __dirname + '/public'
  },

  module:{
    loaders:[
    // IMPORTANT!!!
      {
        test: /[\/]angular\.js$/,
        loader: "exports?angular"
      }
    ]
  },

  plugins: [new BowerWebpackPlugin({
     excludes: [/\.css$/],
  })]
};