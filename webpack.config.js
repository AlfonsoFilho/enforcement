
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        filename: '[name].bundle.js',
        path: './dist',
        library: 'enforcement',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}