const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer");
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
    new WebpackBundleAnalyzer.BundleAnalyzerPlugin({
      analyzerMode: "static",
    }),
    new WebpackPwaManifestPlugin({
      name: "Petgram - Tu app de fotos de mascotas",
      short_name: "petgram 😺",
      description:
        "Con petgram puedes encontrar fotos de animales muy facilmente",
      background_color: "#fff",
      theme_color: "#b1a",
      start_url: ".",

      icons: [
        {
          src: path.resolve("src/assets/icons.png"),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
};
