/*
 * Server config
 */

import express from "express";

import morgan from "morgan";
import cors from "cors";

import authRoute from "./routes/auth.route";

// * Initialization
const app = express();

// * Settings
app.set("port", process.env.PORT || 3000);

// * Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// * routes
app.get("/", (req, res) => {
  res.send({ message: `API running at ${app.get("port")}` });
});

app.use("/api/v1.0/auth", authRoute);

export default app;
