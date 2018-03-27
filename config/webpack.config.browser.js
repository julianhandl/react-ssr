const HtmlWebpackPlugin = require('html-webpack-plugin');
let config = require('./webpack.config.js');

// set entry for browser. Bundle whole React app into browser.js
const hash = Math.random().toString().split('.')[1];
const target = '/public/' + hash + '.browser.js';
config.entry = {
    [target]: './src/entryPoint/browser.js'
};

// include browser bundle in the index.html template
config.plugins =  [
    ...config.plugins,
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        chunks: [target]
    })
];

module.exports = config;