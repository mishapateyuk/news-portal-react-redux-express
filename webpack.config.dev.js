import path from 'path';
import webpack from 'webpack';

export default {
  devtool: "source-map",
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, './client/index.js'),
  ],
  output: {
    filename: "bundle.js",
    path: '/',
    publicPath: '/',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
        ],
        loader: ["react-hot-loader", "babel-loader"],
      }
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
