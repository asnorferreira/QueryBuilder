import express from "express";
import { routes } from "./routes.js";

export const app = express();

app.use(express.json());

app.use(routes);
