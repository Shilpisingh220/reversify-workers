import { Hono } from "hono";

const app = new Hono();

const reverse = (input) => input.split("").reverse().join("");

app.get("/", (c) => {
  return c.text("service active");
});

app.post("/", async (c) => {
  const { text } = await c.req.json();
  return c.text(`this is your response: ${reverse(text)}`);
});

export default app;
