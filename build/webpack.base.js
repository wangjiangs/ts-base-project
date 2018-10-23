const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
    context:path.resolve(__dirname, "../"),
    entry:{
        "index":"./src/scripts/index.ts",
    },
    output:{
        path:path.resolve(__dirname, "../dist/"),
        filename:"scripts/[name][hash:7].js",
    },
    module:{
        rules:[{
            test:/\.ts$/,
            use:[
                "ts-loader"]
        },{
            test:/\.less$/,
            use:["style-loader","css-loader","postcss-loader","less-loader"]
        },{
            test:/\.(png|jpg|svg)$/,
            loader:"url-loader"
        },{
            test:/\.pug$/,
            use:"pug-loader"
        }]
    },
    resolve:{
        extensions:[".js",".ts"]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"src/pages/index.pug",
            filename:"index.html",
            title:"TigerWallet下载",
            chunks:["index"],
            inject:"head",
        }),
        new CopyWebpackPlugin([{
            from:"static",
            to:"static"
        }])
    ]
}