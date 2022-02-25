import http from "http";

import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("ping");

  res.send("pong");
});

const server = http.createServer(app);

server.listen(3001, () => {
  console.log("Server is listening");
});

export const f = 10;
