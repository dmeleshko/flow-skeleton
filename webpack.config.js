const path = require("path")
const FlowtypePlugin = require("flowtype-loader/plugin")

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, use: "babel-loader", // enforce: "pre", exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new FlowtypePlugin(),
  ],
}
