const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /.(js)x?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
