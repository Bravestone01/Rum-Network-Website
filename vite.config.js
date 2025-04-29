import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteSitemap from 'vite-plugin-sitemap'

// Define all your routes explicitly
const routes = [
  '/',
  '/whitepaper',
  '/roadmap',
  '/features',
  '/faq',
  '/terms',
  '/privacy'
];

// Create sitemap entries with full configuration
const sitemap = routes.map(route => ({
  loc: route,
  changefreq: 'daily',
  priority: route === '/' ? 1.0 : 0.8,
  lastmod: new Date().toISOString()
}));

export default defineConfig({
  plugins: [
    react(),
    ViteSitemap({
      hostname: 'https://rum-network-website.vercel.app',
      urls: sitemap
    })
  ],
})