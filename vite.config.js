import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/ecommerce/',
  build: {
    outDir: 'dist',   // ensure dist folder is created
    emptyOutDir: true
  }
})
