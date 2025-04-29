import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Remove the import: import ViteSitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    // Remove the ViteSitemap plugin from here
  ],
})