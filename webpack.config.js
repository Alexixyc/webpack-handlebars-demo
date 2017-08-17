var webpack = require("webpack")

module.exports = {
	entry: {
		app: __dirname + "/src/main.js"
	}, //已多次提及的唯一入口文件
	output: {
		path: __dirname + "/dist", //打包后的文件存放的地方
		filename: "[name].js" //打包后输出文件的文件名
	},
	devtool: 'eval-source-map',

	module: {
		loaders: [{ test: /\.handlebars$/, loader: "handlebars-template-loader" }]
	},
	node: {
        fs: "empty" // avoids error messages
    },
	// 本地服务器配置
	devServer: {
		contentBase: './dist',
		historyApiFallback: true,
		inline: true
	},
	plugins: [
	    new webpack.ProvidePlugin({
	      jQuery: "jquery",
	      $: "jquery"
	    })
	]
}