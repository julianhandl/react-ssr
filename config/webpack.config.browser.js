const HtmlWebpackPlugin = require('html-webpack-plugin');
let config = require('./webpack.config.js');

// set entry for browser. Bundle whole React app into browser.js
config.entry = {
    '/public/browser.js': './src/browser.js'
};

// include browser bundle in the index.html template
config.plugins =  [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        chunks: ['/public/browser.js']
    })
];

module.exports = config;