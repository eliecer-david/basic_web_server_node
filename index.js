const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"))

app.get("*", function (req, res) {
  res.status(404);
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Listening in port ${ port } ...`);
});
