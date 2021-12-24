const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"))

app.get("*", function (req, res) {
  res.status(404);
  res.send("404 | not found");
});

app.listen(port, () => {
  console.log(`Listening in port ${ port } ...`);
});
