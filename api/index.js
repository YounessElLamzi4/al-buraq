import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serverModulePath = path.join(__dirname, '../dist/al-buraq/server/server.mjs');

export { default } from serverModulePath;
