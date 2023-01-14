const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.jsx",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
    publicPath: "./",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$|.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
