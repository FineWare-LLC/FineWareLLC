import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite configuration for deploying this React app to GitHub Pages with a custom domain.
 *
 * Important:
 *  - We’re using a custom domain: fineware.tech
 *  - Set base to '/' so all asset URLs resolve under the root of the domain.
 *
 * @see https://vitejs.dev/config/
 */
// https://vite.dev/config/
export default defineConfig({
  base: '/', // Root of the custom domain
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});