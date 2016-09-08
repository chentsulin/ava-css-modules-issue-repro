module.exports = {
  output: {
    libraryTarget: 'commonjs2',
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', // eslint-disable-line max-len
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
