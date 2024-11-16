import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Get the directory name from import.meta.url
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  entry: `./resources/scripts/index.js`,  // Your entry point
  output: {
    filename: `main.js`,
    path: resolve(__dirname, `dist`),  // Use __dirname as before
  },
  mode: `development`,
};
