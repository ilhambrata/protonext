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
  },
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
      ? process.env.LOCALE_SUBPATHS
      : 'none',
  },
};
