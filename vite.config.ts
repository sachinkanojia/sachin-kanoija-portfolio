import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import sitemapPlugin from 'vite-plugin-sitemap';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      sitemapPlugin({
        hostname: 'https://sachinkanojia.vercel.app',
        exclude: ['/404', '/500'],
        lastmod: new Date(),
        changefreq: 'monthly',
        priority: 0.7,
        dynamicRoutes: [
          '/',
          '/#about',
          '/#expertise',
          '/#projects',
          '/#contact',
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
