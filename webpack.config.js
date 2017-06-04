const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/assets/js/app.js',
    output: {
        path: './src/static/js',
        filename: 'app.bundle.js',
        publicPath: './src/static/js/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            // test: './src/assets/js',
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              cacheDirectory: 'babel_cache',
              presets: ["latest", "react", "stage-0"],
              plugins: ['react-html-attrs', 'transform-class-properties','transform-decorators-legacy']
            }
        }]
    }
}
