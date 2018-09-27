const path = require("path")
const merge = require("webpack-merge")
const webpack = require("webpack")
const baseConfig = require("./webpack.base")
const CleanWebpackPlugin = require("clean-webpack-plugin")

let config = merge(baseConfig, {
    mode:"production",
    devtool:"none",
    plugins:[
        new CleanWebpackPlugin(["dist"],{
            root:path.resolve(__dirname, "../")
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV":JSON.stringify("production")
        })
    ]
})
module.exports = config