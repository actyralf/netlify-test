import express from "express";
import app from "./app.js";
import { exit } from "node:process";

const PORT = process.env.PORT;

if (!PORT) {
  console.error("PORT not configured");
  exit(1);
}

const api = express();

api.use(express.json());
api.use("/", app);

api.listen(PORT, () => {
  console.log("Test API listening on port ", PORT);
});
