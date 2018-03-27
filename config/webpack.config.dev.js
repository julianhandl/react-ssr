const HtmlWebpackPlugin = require('html-webpack-plugin');
let config = require('./webpack.config.js');

// set entry for browser. Bundle whole React app into browser.js
config.entry = './src/entryPoint/dev.js';
config.output.filename = 'bundle.js';

// include browser bundle in the index.html template
config.plugins =  [
    ...config.plugins,
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    })
];

module.exports = config;