const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (_, argv) => {
  return {
    mode: argv.mode,
    devtool: "source-map",
    entry: "./src/index.ts",

    output: {
      path: path.resolve(__dirname + "/dist"),
      publicPath: "/",
      filename:
        argv.mode === "production" ? "[name].[contenthash:8].js" : "bundle.js",
      chunkFilename:
        argv.mode === "production"
          ? "[name].[contenthash:8].chunk.js"
          : "[name].chunk.js",
    },

    // I used this config in the last project with the company I worked on. feel free to use it or just put your own. it has an uncredible effect on the performance on that project.
    optimization: {
      minimize: argv.mode === "production",
      minimizer: [new TerserJSPlugin()],
    },

    resolve: {
      extensions: [".ts", ".js"],
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: [/node_modules/],
          loader: "ts-loader",
        },
      ],
    },

    plugins: [
      new CopyWebpackPlugin([
        {
          from: "./package.json",
          to: "./dist/package.json",
        },
      ]),
    ],
  };
};
