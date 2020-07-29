// --> typical express server
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 6007;

// for HTTP logs
app.use(morgan("dev"));

// send bundle.js
const bundlePath = __dirname + "/build/bundle.js";
app.get("/js/bundle.js", (req, res) => {
  res.sendFile(bundlePath);
});

// --> Code for SSR React
require("node-jsx").install();
const React = require("react");
const { renderToString } = require("react-dom/server");
const App = require("./src/App");

app.use("/", handleRender);

// create HTML layout
function renderFullPage(html) {
  return (
    '<!DOCTYPE html><html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"><script src="js/bundle.js" defer></script><title>Server Side</title></head><body><div id="app" /><div>' +
    html +
    "</div></body></html>"
  );
}

// rendering function
function handleRender(req, res) {
  const html = renderToString(React.createElement(App));
  res.send(renderFullPage(html));
}

// server listening!
app.listen(port, function () {
  console.log(`Server listening on port: ${port}`);
});
