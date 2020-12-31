module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./src/scripts/generate-sitemap');
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
            titleProp: true,
          },
        },
        'url-loader',
      ],
    });
    return config;
  },
};
