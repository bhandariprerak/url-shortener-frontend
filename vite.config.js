import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // avoids some Node-related warnings
  },
  optimizeDeps: {
    exclude: ['autoprefixer', 'source-map-js'], // exclude Node-only modules from pre-bundling
  },
})