import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    // Add this to ensure all routes work
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
