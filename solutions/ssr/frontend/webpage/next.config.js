const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const withOptimizedImages = require('next-optimized-images');
const path = require('path');

module.exports = withOptimizedImages({
  i18n: {
    locales: ['it-IT'],
    defaultLocale: 'it-IT',
  },
  images: {
    formats: ['image/webp'],
  },
  webpack: (config) => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    config.module.rules.push({
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
        },
      ],
    });
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            encoding: false,
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.(mov|mp4|webm)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      ],
    });
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: '.env.development',
            to: '.env.development',
            noErrorOnMissing: true,
          },
          { from: '.env.staging', to: '.env.staging', noErrorOnMissing: true },
          { from: '.env.prod', to: '.env.prod', noErrorOnMissing: true },
        ],
      })
    );
    config.resolve.alias.images = path.join(__dirname, 'images');
    return config;
  },
});
