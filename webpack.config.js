const HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({ //@See https://github.com/jantimon/html-webpack-plugin
            filename: 'index.html',
            title: 'Single Page',
            inject: true,  // true || 'head' || 'body' || false
            minify: false,
            hash: false,  // change to true for cache busting
            inlineSource: '.(js|css)$' // embed all javascript and css inline
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]
};