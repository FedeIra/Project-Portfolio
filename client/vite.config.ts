import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/',
  server: { port: 3000 },
  build: { outDir: 'build', emptyOutDir: true },
  plugins: [react()],
  define: { global: 'window' },
});
