const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
	  {
		test: /\.(sc|sa|c)ss$/,
		use: ['style-loader', 'css-loader', 'sass-loader']
	  }
    ]
  },
  plugins:[
	new HWP({template: "./index.html"})
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: [
		{
			directory: path.join(__dirname, 'dist'),
		},
		{
			directory: path.join(__dirname, 'public'),
		},

	],
    compress: true,
    port: 9000
  },
  mode: "development"
};