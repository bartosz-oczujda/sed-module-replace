const webpack = require("webpack")
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.ts',
    output: {
        filename: 'dist/bundle.js'
    },

    // Currently we need to add '.ts' to the resolve.extensions array. 
    resolve: {
        extensions: ['.ts', '.js']
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },

    // Source maps support ('inline-source-map' also works) 
    devtool: 'source-map',

    // Add the loader for .ts files. 
    module: {
        loaders: [
            {
                test: /\.ts/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [

        //using webpack to replace a superclass
        new webpack.NormalModuleReplacementPlugin(
            /src\/Tester.ts/,
            path.join(__dirname, '/src_repl/Tester_repl.ts')
        ),

        //using webpack to replace a class in the middle of inheritance chain
        new webpack.NormalModuleReplacementPlugin(
            /src\/inheritance_chain\/ClassThree.ts/,
            path.join(__dirname, '/src_repl/inheritance_chain/ClassThree.ts')
        ),
        new HtmlWebpackPlugin({template: 'index.html'})
    ]
};