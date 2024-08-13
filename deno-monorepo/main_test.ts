import { Hono } from "jsr:@hono/hono"
import { assertEquals } from "@std/assert"

Deno.test("Hello World", async () => {
  const app = new Hono()
  app.get("/", (c) => c.json({ message: "Hono!" }))

  const res = await app.request("http://localhost:3080/")
  assertEquals(res.status, 200)
})
