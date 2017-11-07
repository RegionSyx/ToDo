const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: ['babel-polyfill', './app/App.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'todo.js',
        publicPath: "/",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: path.resolve(__dirname, './app'),
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash',
            $: 'jquery',
            jQuery: 'jquery',
            Popper: ['popper.js', 'default'],
        }),
        new webpack.DefinePlugin({
            GITHUB_AUTH_TOKEN: JSON.stringify(process.env.GITHUB_AUTH_TOKEN),
        }),
        new HtmlWebpackPlugin({
            template: './app/index.html',
        })
    ],
    devServer: {
        historyApiFallback: true
    }
}
