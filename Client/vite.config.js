import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/siqah/',   // ✨ ini tambahan penting untuk GitHub Pages
  plugins: [react(), tailwindcss()],
})
