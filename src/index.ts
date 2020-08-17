/*
 * Server Initialization
 */

import app from "./app";
import "./database";

async function main() {
  await app.listen(app.get("port"), () => {
    console.log("API Running on " + app.get("port"));
  });
}

main();
