const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

app.use(express());
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: "100mb" }));
app.use(bodyParser.json({ limit: "100mb" }));

app.get("/getCrawler", async (req, res) => {
  const { data } = await axios.get(req.query.url);
  res.send(data);
});

app.listen(port, console.log(`Listening on port ${port} `));
