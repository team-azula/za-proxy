const express = require("express");
const path = require("path");
const model = require("../models/postgresModel.js");
const bodyParser = require("body-parser");
// const db = require('../database/index.js'); why was this here?
const app = express();
const PORT = 3003;

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/carousels/:id", (req, res) => {
  const { id } = req.params;
  model
    .getOneById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send("error with request: ", err);
    });
});

app.post("/carousels", (req, res) => {
  let data = req.body;
  if (data._id) {
    res.status(403).send("cannot post to database with existing _id");
  }
  return model
    .insertOne(data)
    .then((response) => {
      console.log("response from insertOne: ", response);
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log("error in app.post() endpoing: ", err);
      res.status(500).send(err);
    });
});

app.put("/carousels/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  model
    .updateCarousel(id, data)
    .then((response) => {
      console.log("response from updateCarousel: ", response);
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log("error inside endpoint app.put(): ", err);
      res.status(500).json(err);
    });
});

app.delete("/carousels/:id", (req, res) => {
  const { id } = req.params;
  model
    .deleteCarousel(id)
    .then((response) => {
      console.log("response in endpoint app.delete(): ", response);
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log("error in endpoint app.delete(): ", err);
      res.status(500).json(err);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
