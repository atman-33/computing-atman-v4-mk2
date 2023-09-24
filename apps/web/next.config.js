const { composePlugins, withNx } = require('@nx/next');
const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  images: {
    unoptimized: true,
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: String(process.env.ATMAN_WEB_STORAGE_HOSTNAME)
      }
    ]
  },
  output: 'export',
  trailingSlash: true
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withContentlayer
];

module.exports = composePlugins(...plugins)(nextConfig);
