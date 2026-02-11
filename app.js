import "dotenv/config";

import { Router } from "express";

const app = Router();

app.get("/", (_, res) => {
  return res.json({ msg: "Hello from the Test API!" });
});

export default app;
