let ExtractPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: './'
  },
  module: {
    loaders: [
         { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
         {test:/\.(css|less)$/,loader:ExtractPlugin.extract('style','css!less')},
    ]
  },
    plugins:[ new ExtractPlugin("./main.css")]
}
