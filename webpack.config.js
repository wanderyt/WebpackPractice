var webpack = require("webpack");

module.exports = {
	entry: "./src",
	output: {
		/**
		 * Normal load entry point
		path:     "builds",
		filename: "bundle.js"*/

		/**
		 * Load entry on-demand
		 * The output.publicPath option tells Webpack
		 * where to find built assets from the point of view of the page (so in our case in /builds/).
		 * If we visit our page now we’ll see that everything is still working,
		 * but more importantly we’ll see that, since we had an anchor on the page,
		 * Webpack properly loaded our chunk
		 */
		path: "builds",
		filename: "bundle.js",
		publicPath: "builds/"
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name:      "main", // Monve dependencies to our main file
			children:  true, // Look for common dependencies in all children
			minChunks: 2 // How many times a dependency must come up before being extracted
		})
	],
	module: {
		loaders: [{
			test: /\.js/,
			loader: "babel-loader?presets[]=es2015"/*,
			include: __dirname + "/src"*/
		}, {
			test: /\.scss/,
			loader: "style!css!sass",
			// Or loaders: ["style", "css", "sass"]
		}, {
			test: /\.html/,
			loader: "html"
		}]
	}
};