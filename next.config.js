/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client'],
    optimizeCss: true,
    webpackBuildWorker: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    ANDROID_APK_URL: process.env.ANDROID_APK_URL || 'https://dropbox.com/s/your-app-link/app.apk?dl=1',
    ADMIN_PANEL_URL: process.env.ADMIN_PANEL_URL || 'https://your-admin-panel.firebaseapp.com',
    API_BASE_URL: process.env.API_BASE_URL || 'https://your-api.firebaseapp.com/api',
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
}

module.exports = nextConfig
