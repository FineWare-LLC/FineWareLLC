// deploy.js
/**
 * @file deploy.js
 * @description
 * Builds the Vite project and publishes the `dist/` folder to the `gh-pages` branch
 * via the `gh-pages` package. Also ensures a CNAME file is deployed for the custom domain.
 *
 * Usage:
 *   node deploy.js
 */
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Derive __dirname in ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  console.log('🔨 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Create CNAME file for custom domain
  const distPath = join(__dirname, 'dist');
  const cnamePath = join(distPath, 'CNAME');
  writeFileSync(cnamePath, 'fineware.tech');
  console.log('📝 Created CNAME file with custom domain');

  console.log('🚀 Deploying to GitHub Pages (gh-pages branch)...');
  execSync('npx gh-pages -d dist', { stdio: 'inherit' });

  console.log('✅ Deployment complete!');
} catch (error) {
  console.error('❌ Deployment failed:', error);
  process.exit(1);
}
