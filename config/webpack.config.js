const path = require('path');

/*
    Basic webpack config to compile a react app.
    Inputs are added in the browser and server config.
*/
module.exports = {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]'
    },
    module:{
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: [
                'babel-loader'
            ]
        }]
    }
}