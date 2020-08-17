import mongoose, { mongo } from "mongoose";
import config from "./config/config";

mongoose.connect(config.DB.URI);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});
