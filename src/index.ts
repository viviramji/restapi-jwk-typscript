/*
 * Server Initialization
 */

import app from "./app";

//app.listen(app.get("port"));

async function main() {
  await app.listen(app.get("port"), () => {
    console.log("Service on port " + app.get("port"));
  });
}

main();
