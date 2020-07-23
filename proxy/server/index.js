/* Import Modules */
const path = require("path");
/* Set up the environment variables */
require("dotenv").config({ path: path.resolve(__dirname, "./config/.env") });

/* Require New Relic For Performance Monitoring*/
require("../newrelic");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => console.log(`Proxy server running on port ${port}!`));
