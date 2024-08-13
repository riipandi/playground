import app from "@scope/backend"

const hostname = Deno.env.get("ENVIRONMENT") === "production"
  ? "0.0.0.0"
  : "127.0.0.1"

Deno.serve({ hostname, port: 3080 }, app.fetch)
