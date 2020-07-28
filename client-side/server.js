// typical server
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 6006;

app.use(morgan("dev"));

app.use("/", express.static("public"));

// send bundle.js
const bundlePath = __dirname + "/build/bundle.js";
app.get("/js/bundle.js", (req, res) => {
  res.sendFile(bundlePath);
});

app.listen(port, function () {
  console.log(`Server listening on port: ${port}`);
});
