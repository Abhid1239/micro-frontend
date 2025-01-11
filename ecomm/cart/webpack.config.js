const htmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: "development",
    devServer: {
        port: 8082,

    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartIndex': './src/bootstrap.js'
                // or whatever your cart entry point is
            },
            shared: ['faker']
        })
    ]

}