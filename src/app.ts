/*
 * Server config
 */

import express from "express";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";

import morgan from "morgan";
import cors from "cors";

import authRoute from "./routes/auth.route";
import dashboardRoute from "./routes/dashboard.route";

// * Initialization
const app = express();

// * Settings
app.set("port", process.env.PORT || 3000);

// * Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(passport.initialize());
passport.use(passportMiddleware);

// * routes
app.get("/", (req, res) => {
  res.send({ message: `API running at ${app.get("port")}` });
});

app.use("/api/v1.0/auth", authRoute);
app.use("/api/v1.0/dashboard", dashboardRoute);

export default app;
