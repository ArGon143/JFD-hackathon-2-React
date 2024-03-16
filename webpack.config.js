const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    output: {
        path: path.join(__dirname, "/build"),
        publicPath: "/",
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/public/index.html",
            robots: './src/public/robots.txt',
            favicon: './src/public/favicon.ico',
        }),
        new webpack.ProvidePlugin({
            process: "process/browser",
        })
    ],
    devServer: {
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: { limit: false },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".css", ".scss", "sass", ".png", ".jpg", ".svg"],
    }
};
