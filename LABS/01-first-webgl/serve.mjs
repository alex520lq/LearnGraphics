import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { extname, isAbsolute, relative, resolve } from "node:path";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT ?? 4173);
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400).end("Bad request");
    return;
  }

  const filePath = resolve(root, `.${pathname === "/" ? "/01-first-webgl.html" : pathname}`);
  const relativePath = relative(root, filePath);
  if (relativePath.startsWith("..") || isAbsolute(relativePath)) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  try {
    const content = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
    });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "EISDIR") {
      response.writeHead(404).end("Not found");
      return;
    }
    console.error("Failed to serve file:", error);
    response.writeHead(500).end("Internal server error");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`First WebGL lab: http://127.0.0.1:${port}/`);
});
