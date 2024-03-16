const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        main: path.join(__dirname, "./src/index.js"),
    },
    output: {
        path: path.join(__dirname, "/build"),
        publicPath: "/",
        filename: "bundle.js",
    },
    target: ["web", "es5"],
    stats: { children: true },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/public/index.html",
            robots: './src/public/robots.txt',
            favicon: './src/public/favicon.ico',
        }),
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
    ],
    devServer: {
        port: 3000,
        hot: true,
        static: {
            directory: path.join(__dirname, "./"),
            serveIndex: true,
        }
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
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                        }
                    },
                ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: { limit: false },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".scss", "sass", ".png", ".jpg", ".svg"],
    }
};
