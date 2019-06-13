const path = require('path');

/*
    Basic webpack config to compile a react app.
    Inputs are added in the browser and server config.
*/
module.exports = (env, options = {}) => {
    const publicPath = options.mode == 'production'
        ? "/public/"
        : undefined;
    const outputPath = options.mode == 'production'
        ? "public/"
        : undefined;

    return {
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: '[name]'
        },
        module:{
            rules: [
                { test: /\.(tsx|ts)?$/, loader: "awesome-typescript-loader" },

                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
                {
                    test: /\.(png|jpg|gif|svg|otf|webmanifest)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: publicPath,
                            outputPath: outputPath,
                            context: ''
                        }  
                    }]
                },
            ]
        },
        resolve: {
            extensions: [".js", ".json", ".jsx", ".css", ".scss", ".ts", ".tsx", ".svg"],
        },
        devtool: 'source-map',
        plugins: [
        ]
    }
}