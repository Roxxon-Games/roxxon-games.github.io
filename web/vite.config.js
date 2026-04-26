import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  publicDir: path.resolve(__dirname, '../images'),
  server: {
    fs: {
      allow: [path.resolve(__dirname), path.resolve(__dirname, '../images')],
    },
  },
});
