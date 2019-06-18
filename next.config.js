module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      enforce: 'pre',
      test: /\.js?$/,
      exclude: [/node_modules/],
      loader: 'eslint-loader',
      options: {
        quiet: true,
      }
    });
    return config;
  }
};
