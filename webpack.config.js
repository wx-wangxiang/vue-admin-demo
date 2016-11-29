var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src/js/app');
var COMPONENT_PATH = path.resolve(ROOT_PATH, 'src/js/component');
var BUILD_PATH = path.resolve(ROOT_PATH, 'asset');
var TEM_PATH = path.resolve(ROOT_PATH, 'src/tpl');

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'index.js')
	},
	output: {
		path: BUILD_PATH,
		filename: '[name].js'
	},
	/*module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: APP_PATH
			},{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015'],
					plugins: ['transform-runtime', 'transform-object-rest-spread']
				}
			},{
				test: /\.(png|jpg|jpeg|woff|woff2)/,
				loader: 'url?limit=8192'
			},{
				test: /\.vue$/,
				loader: 'vue',
				include: APP_PATH
			}
		]
	},*/
	module: {
		loaders: [
		{
			test: /\.css$/,
			loaders: ['style', 'css'],
			include: APP_PATH
		},{
			test: /\.(png|jpg|gif|woff|woff2)/,
			loader: 'url?limit=8192'
		},{
			test: /\.js$/,
			loader:'babel', //?{"presets":["es2015"],"plugins":["transform-runtime", "transform-object-rest-spread"]}
			query: {
				presets: ["es2015"],
				plugins: ["transform-runtime", "transform-object-rest-spread"]
			},
			exclude: /node_modules/
		},{
			test: /\.vue$/,
			loader: 'vue',
			include: COMPONENT_PATH
		}]
	},
	/*vue: {
		loaders: {
			js: 'babel?{"presets":["es2015"], "plugins":["transform-runtime","transform-object-rest-spread"]}'
		}
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'Admin Demo',
			template: path.resolve(TEM_PATH, 'index.html'),
			filename: 'index.html',
			chunks: ['app'],
			inject: 'body'
		})
	],*/
	plugins: [
		new htmlWebpackPlugin({
			title: 'vue is great',
			template: path.resolve(TEM_PATH, 'index.html'),
			filename: 'index.html',
			chunks: ['app'],
			inject: 'body'
		})
	],
	vue: {
		loaders: {
			js: 'babel?{"presets":["es2015"],"plugins":["transform-runtime", "transform-object-rest-spread"]}'
		}
	},
	resolve: {
		// require时省略的扩展名，如：require('app') 不需要app.js
		extensions: ['', '.js', '.vue']
	}
}