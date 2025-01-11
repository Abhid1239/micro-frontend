const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devServer: {
        port: 8080,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                products: "products@http://localhost:8081/remoteEntry.js",
                cart: "cart@http://localhost:8082/remoteEntry.js"
            },
            shared: {
                faker: {
                    singleton: true
                }
            }
        })
    ]
}