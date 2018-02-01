const webpack = require('webpack');
const nodeENV = process.env.nodeENV || 'production';

module.exports = {
    entry: {
        filename: './app.js'
    },
    output:{
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['es2015', {modules: false}]
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false}
        }),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(nodeENV)}
        })
    ]
}