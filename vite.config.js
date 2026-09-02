import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves project sites from /<repository-name>/ rather than /.
export default defineConfig({
  base: '/kelly_web/',
  plugins: [react()],
});
