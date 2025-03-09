import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async (req, res) => {
  const { app } = await import(
    path.join(__dirname, "../dist/al-buraq/server/server.mjs")
  );
  return app(req, res);
};
