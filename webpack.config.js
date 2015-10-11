var path = require('path');
var Promise = require('es6-promise').Promise;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');


var config = function(){

  var env = process.env.NODE_ENV || 'dev';
  var port = 4000;

  var getEntry = function() {
    if(env == 'production')
    {
      return path.resolve(__dirname, 'assets/src/index.js');
    }
    else
    {
      return [
        'webpack-dev-server/client?http://localhost:' + port,
        'webpack/hot/only-dev-server',
        './assets/src/index.js'
      ];
    }
  }

  var getPublicPath = function() {
    if(env == 'production')
    {
      return __dirname;
    }
    else
    {
      return '/static/';
    }
  }

  var getPlugins = function() {
    if(env == 'production')
    {
      return [ new ExtractTextPlugin("[name].css") ];
    }
    else
    {
      return [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css")
      ]
    }
  }

  var getSassLoader = function() {
    var _loader = 'style!css!sass';

    if(env == 'production')
    {
      _loader = ExtractTextPlugin.extract('style','css!sass');
    }

    return _loader;
  }

  return {
    context: __dirname,
    entry: getEntry(),
    devtool: 'eval',
    output: {
      publicPath: getPublicPath(),
      path: path.resolve(__dirname, 'assets/dist'),
      filename: 'app.js'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'assets/src'),
        loaders: ['react-hot', 'babel-loader']
      },

      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader","css-loader")
        // loader: 'style-loader!css-loader'
      },

      // SASS
      {
        test: /\.scss$/,
        loader: getSassLoader()
      }]
    },
    plugins: getPlugins()
  }

}

module.exports = config();