import "dotenv/config";
import { exit } from "node:process";
import express from "express";

const PORT = process.env.PORT;

if (!PORT) {
  console.error("PORT not configured");
  exit(1);
}

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  return res.json({ msg: "Hello from the Test API" });
});

app.listen(PORT, () => {
  console.log("Test API listening on port ", PORT);
});
