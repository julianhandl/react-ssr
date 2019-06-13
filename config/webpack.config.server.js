const base = require('./webpack.config.js');
const fetch = require('node-fetch');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = (env, options = {}) => {
    let config = base(env, options);

    // set libraryTarget to umd, so we can require it in server.js
    config.output.libraryTarget = 'umd';
    // set target to node, so we can use it in our express server
    config.target = 'node';
    // set entry point. Compile only the app without React Dom entry point
    config.entry = {
        './app.js': './src/App.tsx',
        './reducers.js': './src/reducers/root-reducer.ts'
    };

    config.module.rules = [
        ...config.module.rules,
        {
            test: /\.(css|sass|scss)$/,
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }
    ];

    config.externals = ['react-helmet'];

    config.plugins = [
        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname, '..')
        })
    ];

    return config;
}