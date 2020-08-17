import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config/config";

// * We need to import ConnectionOption just to allow autocomplete
// * and give a "real" type to our dbOptions

const dbOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(config.DB.URI, dbOptions);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});

connection.on("error", (err) => {
  console.log(err);
  process.exit(0);
});

/* export async function startDBConnection() {
  await mongoose.connect(config.DB.URI, dbOptions);

  const connection = mongoose.connection;

  connection.once("open", () => {
    console.log("DB is connected");
  });

  connection.on("error", err => {
    console.log(err);
    process.exit(0);
  });
} */
