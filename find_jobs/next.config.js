/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
    ],
  },
  webpack: (config, { isServer }) => {
    // Add a rule to handle video files
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'videos/[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};
