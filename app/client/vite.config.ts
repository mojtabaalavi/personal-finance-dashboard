import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/// <reference types="vitest" />
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Docker mapping
    port: 3002,
    strictPort: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  }
})
