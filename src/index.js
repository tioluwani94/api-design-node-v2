import http from "http";
import { createServer } from "http";
import app from "./server";

let currentApp = app;

app.listen(3001, () => {
  console.log("http://localhost:3001");
});

if (module.hot) {
  module.hot.accept(["./server"], () => {
    server.removeListener("request", currentApp);
    server.on("request", app);
    currentApp = app;
  });
}
