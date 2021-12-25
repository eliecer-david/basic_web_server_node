const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "hbs");

app.use(express.static("public"))

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/generic", function (req, res) {
  res.render("generic");
});

app.get("/elements", function (req, res) {
  res.render("elements");
});

app.get("*", function (req, res) {
  res.status(404);
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Listening in port ${ port } ...`);
});
