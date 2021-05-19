const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (_) => {
  return {
    entry: './lib/index.js',

    output: {
      path: path.resolve(__dirname + '/dist'),
      filename: '[name].js',
      library: 'WordResearcher',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },

    // I used this config in the last project with the company I worked on. feel free to use it or just put your own. it has an uncredible effect on the performance on that project.
    optimization: {
      minimize: true,
      minimizer: [new TerserJSPlugin()],
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          loader: 'babel-loader',
        },
        {
          test: /\.tsx?$/,
          exclude: [/node_modules/],
          loader: 'ts-loader',
        },
      ],
    },

    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './package.json',
            to: './package.json',
          },
        ],
      }),
    ],
  };
};
