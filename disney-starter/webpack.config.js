const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//spit out seperate file for css -> multiple entry / output points

module.exports = (env, argv) => {
    const devtool = argv.mode === "development" ? "eval-source-map" : "nosources-source-map"
    return {
    entry: {
        scripts: './src/index.js',
        styles: './src/styles/style.scss'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[hash].js'
    },
    devtool: devtool,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },

} }