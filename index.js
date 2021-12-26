require("dotenv").config();

const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"))

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/generic", function (req, res) {
  res.render("generic", { class: "alt" });
});

app.get("/elements", function (req, res) {
  res.render("elements", { class: "alt" });
});

app.get("*", function (req, res) {
  res.status(404);
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Listening in port ${ port } ...`);
});
