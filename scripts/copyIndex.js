import { copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get paths
const sourcePath = join(__dirname, '..', 'index.html');
const targetPath = join(__dirname, '..', 'public', 'index.html');

// Copy file
try {
    await copyFile(sourcePath, targetPath);
    console.log('✓ Successfully copied index.html to public folder');
} catch (err) {
    console.error('Error copying index.html:', err);
    process.exit(1);
} 