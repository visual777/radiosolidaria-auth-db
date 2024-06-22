/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
        config.module.rules.push({
          test: /\.webp$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                fallback: 'file-loader',
                publicPath: '/_next/static/images/',
                outputPath: 'static/images/',
                name: '[name].[hash].[ext]',
              },
            },
          ],
        });
    
        return config;
      },
};

export default nextConfig;
