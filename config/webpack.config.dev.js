const HtmlWebpackPlugin = require('html-webpack-plugin');
let config = require('./webpack.config.js');

// set entry for browser. Bundle whole React app into browser.js
config.entry = './src/entryPoint/dev.js';
config.output.filename = 'bundle.js';

config.module.rules = [
    ...config.module.rules,
    {
        test: /\.(css|sass|scss)$/,
        use: [{
            loader: 'style-loader',
            options: {
                sourceMap: true
            }
        }, {
            loader: "css-loader",
            options: {
                url: false,
                minimize: true,
                sourceMap: true
            } // translates CSS into CommonJS
        }, {
            loader: "sass-loader",
            options: {
                sourceMap: true
            } // compiles Sass to CSS
        }]
    }
];

config.devServer = {
    historyApiFallback: true
};

// include browser bundle in the index.html template
config.plugins =  [
    ...config.plugins,
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    })
];

module.exports = config;