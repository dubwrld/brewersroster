const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (request, response) => {
  response.send = await(fetch("./brewersRosterArray.json")).json();
  app.listen(3001, function () {});
});

app.listen(3001, function () {
  console.log("hello world");
});
