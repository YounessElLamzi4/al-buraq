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
  const handler = serverModule.default;

  if (typeof handler !== "function") {
    console.error("Expected handler to be a function but got:", typeof handler);
    res.status(500).send("Server error: handler is not a function");
    return;
  }

  return handler(req, res);
};
