/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Alera Kasm',
    description: 'Not the official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://bionicdonkey.github.io/kasm-registry/',
    contactUrl: 'https://github.com/bionicdonkey/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
