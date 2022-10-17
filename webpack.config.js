const path = require('path');

module.exports = {
  performance: {
    maxAssetSize: 1000000,
  },
  entry: "./src/index.js",
  output: {
      fileName: "main.js",
      path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext][query]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[hash][ext][query]'
          }
        },
      ]
    },

  output: {
      path: path.resolve(__dirname, 'dist'),
  }

}