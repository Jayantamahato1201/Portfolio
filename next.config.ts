import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['@genkit-ai/googleai'],
    turbopack: {
      resolveExtensions: [
        '.native.tsx',
        '.native.ts',
        '.native.jsx',
        '.native.js',
        '.android.tsx',
        '.android.ts',
        '.android.jsx',
        '.android.js',
        '.ios.tsx',
        '.ios.ts',
        '.ios.jsx',
        '.ios.js',
        '.web.tsx',
        '.web.ts',
        '.web.jsx',
        '.web.js',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.json',
        '.mjs',
        '.node',
        '.css',
      ],
      resolveAlias: {
        'next/dist/compiled/p-limit':
          'next/dist/compiled/p-limit/index.js',
      },
    },
  },
};

export default nextConfig;
