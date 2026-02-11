import express from "express";
import serverless from "serverless-http";
import app from "../../app.js";

const api = express();

api.use(express.json());
api.use("/", app);

export const handler = serverless(api);
