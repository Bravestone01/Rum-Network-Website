import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteSitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    ViteSitemap({
      hostname: 'https://rum-network-website.vercel.app',
      changefreq: 'daily',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    })
  ],
})