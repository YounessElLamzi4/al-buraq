import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serverModulePath = path.join(
  __dirname,
  "../dist/al-buraq/server/server.mjs"
);

export default async (req, res) => {
  const serverModule = await import(serverModulePath);
  const app = serverModule.default || serverModule.app;

  if (typeof app !== "function") {
    console.error("Expected app to be a function but got:", typeof app);
    res.status(500).send("Server error: app is not a function");
    return;
  }

  return app(req, res);
};
