const path = require('path');
const MiniCssExtractPlugin = require ("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, '/build'),
		publicPath:'/',
		filename: 'bundle.js',
		clean: true,
	},
	module:{
		rules:[
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use:{
					loader: 'babel-loader',
				}
			},
			{
				test: /\.css$/i,
				use:[
					MiniCssExtractPlugin.loader, 
					'css-loader', 
					'postcss-loader'
				]
			},
			{
				test: /\.(png|jpeg|svg)$/i,
				type:'asset/resource'
			},
			/*{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack'],
			}*/
		]
	},
	plugins:[
		new MiniCssExtractPlugin({filename:"tailwind.css",}), 
		new HtmlWebpackPlugin({
			title:'Avocado Express',
			template: './src/index.html',
			favicon:'./favicon_avocado.svg'
		})
	]
}
