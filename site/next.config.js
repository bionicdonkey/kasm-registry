/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Alera Kasm',
    description: 'Not the official store for Kasm supported workspaces.',
    icon: 'https://authentik-media.alera.casa/media/public/App_Kasm.svg',
    listUrl: 'https://bioncidonkey.githib.io/kasm-registry/',
    contactUrl: 'https://github.com/bionicdonkey/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
