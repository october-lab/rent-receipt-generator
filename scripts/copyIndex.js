import { copyFile, cp } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get paths
const distPath = join(__dirname, '..', 'dist');
const publicPath = join(__dirname, '..', 'public');
const distAssetsPath = join(distPath, 'assets');
const publicAssetsPath = join(publicPath, 'assets');

// Copy files
try {
    // Copy index.html
    await copyFile(
        join(distPath, 'index.html'),
        join(publicPath, 'index.html')
    );
    console.log('✓ Successfully copied index.html from dist to public');

    // Copy assets folder if it exists
    if (existsSync(distAssetsPath)) {
        await cp(distAssetsPath, publicAssetsPath, { recursive: true });
        console.log('✓ Successfully copied assets folder from dist to public');
    }
} catch (err) {
    console.error('Error copying files:', err);
    process.exit(1);
} 