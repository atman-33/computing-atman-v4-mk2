const { composePlugins, withNx } = require('@nx/next');
const { withContentlayer } = require('next-contentlayer');

const dns = require('node:dns');
dns.setDefaultResultOrder('ipv4first');

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
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: String(process.env.ATMAN_WEB_STORAGE_HOSTNAME)
      }
    ]
  },
  swcMinify: true
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withContentlayer
];

module.exports = composePlugins(...plugins)(nextConfig);
