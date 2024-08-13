import { Hono } from "jsr:@hono/hono"

const app = new Hono()

app.get("/", (c) => c.json({ message: "Hono!" }))

export default app
