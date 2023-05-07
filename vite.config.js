// vite.config.js

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['@vue/runtime-dom'],
    dedupe: false
  },
  esbuild: {
   jsxFactory: 'h',
   jsxFragment: 'Fragment'
  }
});
