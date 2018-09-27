const path = require("path")
const merge = require("webpack-merge")
const webpack = require("webpack")
const baseConfig = require("./webpack.base")

let config = merge(baseConfig, {
    mode:"development",
    devtool:"inline-source-map",
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            "process.env.NODE_ENV":JSON.stringify("development")
        })
    ],
    devServer:{
        contentBase:"dist",
        host:"0.0.0.0"
    }
})
module.exports = config